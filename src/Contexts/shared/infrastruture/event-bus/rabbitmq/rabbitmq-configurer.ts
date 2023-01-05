import { inject, injectable } from 'tsyringe';
import { containerTypes } from '../../../../../apps/mooc/backend/dependency-injection/container.types';
import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/domain-event-subscriber';
import { RabbitMQConnection } from './rabbit-mq-connection';
import { RabbitMQQueueFormatter } from './rabbit-mq-queue-formatter';
import { RabbitMQExchangeNameFormatter } from './rabbit-qm-exchange-name-formatter';

@injectable()
export class RabbitMQConfigurer {
	private moduleName: string;
	private messageRetryTtl: number;
	constructor(
		@inject(containerTypes.rabbitMQConnection)
		private connection: RabbitMQConnection,
		@inject(containerTypes.rabbitMQQueueFormatter)
		private queueNameFormatter: RabbitMQQueueFormatter
	) {
		this.moduleName = 'mooc';
	}

	async configure(params: {
		exchange: string;
		subscribers: Array<IDomainEventSubscriber<DomainEvent>>;
	}): Promise<void> {
		const retryExchange = RabbitMQExchangeNameFormatter.retry(params.exchange);
		const deadLetterExchange = RabbitMQExchangeNameFormatter.deadLetter(
			params.exchange
		);

		await this.connection.exchange(params.exchange);
		await this.connection.exchange(retryExchange);
		await this.connection.exchange(deadLetterExchange);
		for (const subscriber of params.subscribers) {
			await this.addQueue(subscriber, params.exchange);
		}
	}

	async addQueue(
		subscriber: IDomainEventSubscriber<DomainEvent>,
		exchange: string
	): Promise<void> {
		const retryExchange = RabbitMQExchangeNameFormatter.retry(exchange);
		const deadLetterExchange =
			RabbitMQExchangeNameFormatter.deadLetter(exchange);

		const routingKeys = this.getRoutingKeys(subscriber);
		const queue = this.queueNameFormatter.format(subscriber);
		const deadLetterQueue =
			this.queueNameFormatter.formatDeadLetter(subscriber);
		const retryQueue = this.queueNameFormatter.formatRetry(subscriber);

		console.log('retryExchange', retryExchange);
		console.log('deadLetterExchange', deadLetterExchange);
		console.log('routingKeys', routingKeys);
		console.log('queue', queue);
		console.log('retryQueue', retryQueue);
		console.log('delettherQue', deadLetterQueue);

		await this.connection.queue({
			routingKeys,
			name: queue,
			exchange,
		});

		await this.connection.queue({
			routingKeys: [queue],
			name: retryQueue,
			exchange: retryExchange,
			messageTtl: this.messageRetryTtl,
			deadLetterExchange: exchange,
			deadLetterQueue: queue,
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

		const queue = this.queueNameFormatter.format(subscriber);
		routingKeys.push(queue);

		return routingKeys;
	}
}
