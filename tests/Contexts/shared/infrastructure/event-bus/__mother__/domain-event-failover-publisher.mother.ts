import { DomainEventFailoverPublisher } from '../../../../../../src/Contexts/shared/infrastruture/event-bus/domain-event-failover-publisher';
import {} from '../__mother__/rabbit-mq-deserializer.mother';
import { RabbitMQTypeOrmClientMother } from './rabbit-mq-typeorm-client.mother';

export class DomainEventFailoverPublisherMother {
	static create(): DomainEventFailoverPublisher {
		const typeormClient = RabbitMQTypeOrmClientMother.create();
		return new DomainEventFailoverPublisher(
			DomainEventDeserializerMother.create()
		);
	}

	static failOverDouble() {
		return new DomainEventFailoverPublisherDouble();
	}
}
