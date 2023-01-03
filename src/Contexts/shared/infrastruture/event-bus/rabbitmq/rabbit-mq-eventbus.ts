import { inject, injectable } from 'tsyringe';
import { containerTypes } from '../../../../../apps/mooc/backend/dependency-injection/container.types';
import { DomainEvent } from '../../../domain/domain-event';
import { IEventBus } from '../../../domain/event-bus';
import { DomainEventDeserializer } from '../domain-event-deserializer';
import { DomainEventFailoverPublisher } from '../domain-event-failover-publisher';
import { DomainEventSubscribers } from '../domain-event-subscribers';
import { RabbitMqConnection } from './rabbit-mq-connection';
import { RabbitMqConsumerFactory } from './rabbit-mq-consumer-factory';
import { RabbitMQqueueFormatter } from './rabbit-mq-formatter';

@injectable()
export class RabbitMqEventBus implements IEventBus {
	private failoverPublisher: DomainEventFailoverPublisher;
	private connection: RabbitMqConnection;
	private exchange: string;
	private queueNameFormatter: RabbitMQqueueFormatter;
	private maxRetries: Number;

	constructor(
		@inject(containerTypes.rabbitMqConnection)
		connection: RabbitMqConnection
	) {}

	async addSubscribers(subscribers: DomainEventSubscribers): Promise<void> {
		await this.connectToRabbitMq();

		const deserializer = DomainEventDeserializer.configure(subscribers);
		const consumerFactory = new RabbitMqConsumerFactory(
			this.connection,
			deserializer,
			this.maxRetries
		);

		for (const subscriber of subscribers.items) {
			const queueName = this.queueNameFormatter.format(subscriber);
			const rabbitMqConsumer = consumerFactory.build(
				subscriber,
				this.exchange,
				queueName
			);

			await this.connection.consume(
				queueName,
				rabbitMqConsumer.onMessage.bind(rabbitMqConsumer)
			);
		}
	}

	async publish(events: DomainEvent[]): Promise<void> {
		await this.connectToRabbitMq();

		for (const event of events) {
			try {
				const routingKey = event.eventName;
				const content = this.toBuffer(event);
				const options = this.options(event);

				await this.connection.publish({
					exchange: this.exchange,
					routingKey,
					content,
					options,
				});
			} catch (error: any) {
				await this.failoverPublisher.publish(event);
			}
		}
	}

	private toBuffer(event: DomainEvent): Buffer {
		const eventPrimitives = JSON.stringify({
			data: {
				id: event.eventId,
				type: event.eventName,
				occurred_on: event.occurredOn.toISOString(),
				aggregateId: event.aggregateId,
				attributes: event.toPrimitives(),
			},
		});

		return Buffer.from(eventPrimitives);
	}

	private options(event: DomainEvent): {
		messageId: string;
		contentType: string;
		contentEncoding: string;
	} {
		return {
			messageId: event.eventId,
			contentType: 'application/json',
			contentEncoding: 'utf-8',
		};
	}

	private async connectToRabbitMq(): Promise<void> {
		if (this.connection.connectionExists()) return;

		await this.connection.connect();
	}
}
