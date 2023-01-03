import { ConsumeMessage } from 'amqplib';
import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/domain-event-subscriber';
import { DomainEventDeserializer } from '../domain-event-deserializer';
import { RabbitMqConnection } from './rabbit-mq-connection';

interface RabbitMqConsumerParams {
	subscriber: IDomainEventSubscriber<DomainEvent>;
	deserializer: DomainEventDeserializer;
	connection: RabbitMqConnection;
	maxRetries: Number;
	queueName: string;
	exchange: string;
}

export class RabbitMqConsumer {
	private exchange: string;
	private queueName: string;
	private subscriber: IDomainEventSubscriber<DomainEvent>;
	private deserializer: DomainEventDeserializer;
	private connection: RabbitMqConnection;
	private maxRetries: Number;

	constructor(params: RabbitMqConsumerParams) {
		this.subscriber = params.subscriber;
		this.deserializer = params.deserializer;
		this.connection = params.connection;
		this.queueName = params.queueName;
		this.exchange = params.exchange;
	}

	//onMessage
	async onMessage(message: ConsumeMessage): Promise<void> {
		const content = message.content.toString();
		const domainEvent = this.deserializer.deserialize(content);

		try {
			await this.subscriber.on(domainEvent);
		} catch (error) {
			await this.deadLetter(message);
		} finally {
			this.connection.ack(message);
		}
	}

	private async handleError(message: ConsumeMessage): Promise<void> {
		if (this.hasBeenRedeliveredTooMuch(message)) {
			await this.deadLetter(message);
		} else {
			await this.retry(message);
		}
	}

	private async retry(message: ConsumeMessage): Promise<void> {
		await this.connection.retry(message, this.queueName, this.exchange);
	}

	private async deadLetter(message: ConsumeMessage): Promise<void> {
		await this.connection.deadLetter(message, this.queueName, this.exchange);
	}

	private hasBeenRedeliveredTooMuch(message: ConsumeMessage): boolean {
		if (this.hasBeenRedelivered(message)) {
			const count = parseInt(message.properties.headers.redelivery_count);
			return count >= this.maxRetries;
		}
		return false;
	}

	private hasBeenRedelivered(message: ConsumeMessage): boolean {
		return message.properties.headers.redelivery_count !== undefined;
	}
}
