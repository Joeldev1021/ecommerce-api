import { ConsumeMessage } from 'amqplib';
import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/interface/domain-event-subscriber';
import { DomainEventDeserializer } from '../domain-event-deserializer';
import { RabbitMQConnection } from './rabbit-mq-connection';

interface IRabbitMqConsumerParams {
	queue: string;
	exchange: string;
	subscriber: IDomainEventSubscriber<DomainEvent>;
	deserializer: DomainEventDeserializer;
	connection: RabbitMQConnection;
}

export class RabbitMqConsumer {
	private exchange: string;
	private queue: string;
	private subscriber: IDomainEventSubscriber<DomainEvent>;
	private deserializer: DomainEventDeserializer;
	private connection: RabbitMQConnection;

	constructor(params: IRabbitMqConsumerParams) {
		this.subscriber = params.subscriber;
		this.deserializer = params.deserializer;
		this.connection = params.connection;
		this.queue = params.queue;
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

	private async deadLetter(message: ConsumeMessage): Promise<void> {
		await this.connection.deadLetter(message, this.queue, this.exchange);
	}
}
