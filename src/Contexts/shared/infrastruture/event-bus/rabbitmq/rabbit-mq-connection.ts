import amqplib, { ConsumeMessage } from 'amqplib';
import { injectable } from 'tsyringe';
import { RabbitMQExchangeNameFormatter } from './rabbit-qm-exchange-name-formatter';
import { configSettings } from './config/index';

interface RabbitMqPublicationParams {
	exchange: string;
	routingKey: string;
	content: Buffer;
	options: {
		messageId: string;
		contentType: string;
		contentEncoding: string;
		priority?: number;
		headers?: any;
	};
}

@injectable()
export class RabbitMQConnection {
	private connection?: amqplib.Connection;
	private channel?: amqplib.ConfirmChannel;
	private connectionSettings = configSettings;

	async connect(): Promise<void> {
		this.connection = await this.amqpConnect();
		this.channel = await this.amqpChannel();
	}

	async exchange(
		exchangeName: string
	): Promise<amqplib.Replies.AssertExchange | undefined> {
		return await this.channel?.assertExchange(exchangeName, 'topic', {
			durable: true,
		});
	}

	async queue(params: {
		exchange: string;
		name: string;
		routingKeys: string[];
		deadLetterExchange?: string;
		deadLetterQueue?: string;
		messageTtl?: Number;
	}): Promise<void> {
		const durable = true;
		const exclusive = false;
		const autoDelete = false;
		const args = this.getQueueArguments(params);
		await this.channel?.assertQueue(params.name, {
			exclusive,
			durable,
			autoDelete,
			arguments: args,
		});
		for (const routingKey of params.routingKeys) {
			await this.channel?.bindQueue(params.name, params.exchange, routingKey);
		}
	}

	private getQueueArguments(params: {
		exchange: string;
		name: string;
		routingKeys: string[];
		deadLetterExchange?: string;
		deadLetterQueue?: string;
		messageTtl?: Number;
	}): any {
		let args: any = {};
		if (params.deadLetterExchange) {
			args = { ...args, 'x-dead-letter-exchange': params.deadLetterExchange };
		}
		if (params.deadLetterQueue) {
			args = { ...args, 'x-dead-letter-routing-key': params.deadLetterQueue };
		}
		if (params.messageTtl) {
			args = { ...args, 'x-message-ttl': params.messageTtl };
		}

		return args;
	}

	async deleteQueue(
		queue: string
	): Promise<amqplib.Replies.DeleteQueue | undefined> {
		return await this.channel?.deleteQueue(queue);
	}

	/* create connection */
	private async amqpConnect(): Promise<amqplib.Connection> {
		const { hostname, port, secure } = this.connectionSettings.connection;
		const { username, password, vhost } = this.connectionSettings;
		const connection = await amqplib.connect({
			protocol: secure ? 'amqps' : 'amqp',
			hostname,
			port,
			username,
			password,
			vhost,
		});

		connection.on('error', (err: any) => {
			Promise.reject(err);
		});

		return connection;
	}

	/* createChanel */
	private async amqpChannel(): Promise<amqplib.ConfirmChannel | undefined> {
		const channel = await this.connection?.createConfirmChannel();
		await channel?.prefetch(1);
		return channel;
	}

	async publish(params: RabbitMqPublicationParams): Promise<void> {
		const { routingKey, content, options, exchange } = params;

		return await new Promise((resolve, reject) => {
			this.channel?.publish(
				exchange,
				routingKey,
				content,
				options,
				(error: any) => (error ? reject(error) : resolve())
			);
		});
	}

	async close(): Promise<void> {
		await this.channel?.close();
		return await this.connection?.close();
	}

	async consume(
		queue: string,
		onMessage: (message: ConsumeMessage) => {}
	): Promise<void> {
		await this.channel?.consume(queue, (message: ConsumeMessage | null) => {
			if (!message) return;
			onMessage(message);
		});
	}

	async retry(
		message: ConsumeMessage,
		queue: string,
		exchange: string
	): Promise<any> {
		const retryExchange = RabbitMQExchangeNameFormatter.retry(exchange);
		const options = this.getMessageOptions(message);

		return await this.publish({
			exchange: retryExchange,
			routingKey: queue,
			content: message.content,
			options,
		});
	}

	ack(message: ConsumeMessage): void {
		this.channel?.ack(message);
	}

	async deadLetter(
		message: ConsumeMessage,
		queue: string,
		exchange: string
	): Promise<void> {
		const deadLetterExchange = `dead_letter-${exchange}`;
		const options = {
			messageId: message.properties.messageId,
			contentType: message.properties.contentType,
			contentEncoding: message.properties.contentEncoding,
			priority: message.properties.priority,
		};

		return await this.publish({
			exchange: deadLetterExchange,
			routingKey: queue,
			content: message.content,
			options,
		});
	}

	private getMessageOptions(message: ConsumeMessage): any {
		const { messageId, contentType, contentEncoding, priority } =
			message.properties;
		const options = {
			messageId,
			headers: this.incrementRedeliveryCount(message),
			contentType,
			contentEncoding,
			priority,
		};
		return options;
	}

	private async incrementRedeliveryCount(
		message: ConsumeMessage
	): Promise<amqplib.MessagePropertyHeaders> {
		if (this.hasBeenRedelivered(message)) {
			const count = parseInt(message.properties.headers.redelivery_count);
			message.properties.headers.redelivery_count = count + 1;
		} else {
			message.properties.headers.redelivery_count = 1;
		}

		return message.properties.headers;
	}

	private hasBeenRedelivered(message: ConsumeMessage): any {
		return message.properties.headers.redelivery_count !== undefined;
	}

	public connectionExists(): boolean {
		return this.channel !== undefined;
	}
}
