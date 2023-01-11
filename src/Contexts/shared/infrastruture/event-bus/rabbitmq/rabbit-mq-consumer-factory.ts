import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/interface/domain-event-subscriber';
import { DomainEventDeserializer } from '../domain-event-deserializer';
import { RabbitMQConnection } from './rabbit-mq-connection';
import { RabbitMqConsumer } from './rabbit-mq-consumer';

export class RabbitMqConsumerFactory {
	constructor(
		private connection: RabbitMQConnection,
		private deserializer: DomainEventDeserializer
	) {}

	build(
		subscriber: IDomainEventSubscriber<DomainEvent>,
		exchange: string,
		queue: string
	): RabbitMqConsumer {
		return new RabbitMqConsumer({
			connection: this.connection,
			deserializer: this.deserializer,
			queue,
			subscriber,
			exchange,
		});
	}
}
