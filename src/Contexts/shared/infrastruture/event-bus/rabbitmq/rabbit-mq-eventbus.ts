import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../../apps/mooc/backend/dependency-injection/container.types';
import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/interface/domain-event-subscriber';
import { IEventBus } from '../../../domain/interface/event-bus';
import { DomainEventDeserializer } from '../domain-event-deserializer';
import { DomainEventFailoverPublisher } from '../domain-event-failover-publisher';
//import { DomainEventFailoverPublisher } from '../domain-event-failover-publisher';
import { DomainEventSubscribers } from '../domain-event-subscribers';
import { configSettings } from './config';
import { RabbitMQConnection } from './rabbit-mq-connection';
import { RabbitMqConsumerFactory } from './rabbit-mq-consumer-factory';

@injectable()
export class RabbitMqEventBus implements IEventBus {
	private exchange: string = configSettings.exchangeName;
	private moduleName: string = configSettings.moduleName;

	constructor(
		@inject(CONTAINER_TYPE.rabbitMQConnection)
		@inject(CONTAINER_TYPE.domainEventFailoverPublisher)
		private connection: RabbitMQConnection,
		private domainEventFailoverPublisher: DomainEventFailoverPublisher
	) {}

	async addSubscribers(subscribers: DomainEventSubscribers): Promise<void> {
		await this.connectToRabbitMq();

		const deserializer = DomainEventDeserializer.configure(subscribers);
		const consumerFactory = new RabbitMqConsumerFactory(
			this.connection,
			deserializer
		);

		for (const subscriber of subscribers.items) {
			const queueName = this.formatQueueName(subscriber);
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
				const options = this.getOptions(event);

				await this.connection.publish({
					exchange: this.exchange,
					routingKey,
					content,
					options,
				});
			} catch (error: any) {
				await this.domainEventFailoverPublisher.publish(event);
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

	private getOptions(event: DomainEvent): {
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

	private formatQueueName(
		subscriber: IDomainEventSubscriber<DomainEvent>
	): string {
		const value = subscriber.constructor.name;
		const name = value
			.split(/(?=[A-Z])/)
			.join('_')
			.toLowerCase();
		return `${this.moduleName}.${name}`;
	}

	private async connectToRabbitMq(): Promise<void> {
		if (this.connection.connectionExists()) return;

		await this.connection.connect();
	}
}
