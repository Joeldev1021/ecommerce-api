import { inject, injectable } from 'tsyringe';
import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/domain-event-subscriber';
import { RabbitMQConnection } from './rabbit-mq-connection';

export class RabbitMqConfigurer {
	constructor(private connection: RabbitMQConnection) {}

	async configure(params: {
		exchange: string;
		subscribers: Array<IDomainEventSubscriber<DomainEvent>>;
	}): Promise<void> {
		const deadLetterExchange = `dead_letter-${params.exchange}`;

		await this.connection.exchange(params.exchange);
		await this.connection.exchange(deadLetterExchange);

		for (const subscriber of params.subscribers) {
			await this.addQueue(subscriber, params.exchange);
		}
	}

	async addQueue(
		subscriber: IDomainEventSubscriber<DomainEvent>,
		exchange: string
	): Promise<void> {
		const deadLetterExchange = `dead_letter-${exchange}`;

		const routingKeys = this.getRoutingKeys(subscriber);

		const queue = this.formatQueueName(subscriber);
		const deadLetterQueue = this.formatDeadLetterQueueName(subscriber);

		await this.connection.queue({
			routingKeys,
			name: queue,
			exchange,
		});

		await this.connection.queue({
			routingKeys: [queue],
			name: deadLetterQueue,
			exchange: deadLetterExchange,
		});
	}

	private getRoutingKeys(
		subscriber: IDomainEventSubscriber<DomainEvent>
	): string[] {
		const routingKeys = subscriber
			.subscribedTo()
			.map(event => event.EVENT_NAME);

		const queue = this.formatQueueName(subscriber);
		routingKeys.push(queue);
		return routingKeys;
	}

	private formatQueueName(
		subscriber: IDomainEventSubscriber<DomainEvent>
	): string {
		const value = subscriber.constructor.name;
		const name = value
			.split(/(?=[A-Z])/)
			.join('_')
			.toLowerCase();
		return `mooc.${name}`;
	}

	private formatDeadLetterQueueName(
		subscriber: IDomainEventSubscriber<DomainEvent>
	): string {
		const queue = this.formatQueueName(subscriber);
		return `dead_letter.${queue}`;
	}
}
