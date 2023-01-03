import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/domain-event-subscriber';
import { DomainEventDeserializer } from '../domain-event-deserializer';
import { RabbitMqConnection } from './rabbit-mq-connection';
import { RabbitMqConsumer } from './rabbit-mq-consumer';

export class RabbitMqConsumerFactory {
	constructor(
		private connection: RabbitMqConnection,
		private deserializer: DomainEventDeserializer,
		private maxRetries: Number
	) {}

	build(
		subscriber: IDomainEventSubscriber<DomainEvent>,
		exchange: string,
		queueName: string
	): RabbitMqConsumer {
		return new RabbitMqConsumer({
			subscriber,
			deserializer: this.deserializer,
			connection: this.connection,
			queueName,
			exchange,
			maxRetries: this.maxRetries,
		});
	}
}
