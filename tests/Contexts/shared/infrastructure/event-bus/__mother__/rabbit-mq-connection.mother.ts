import { RabbitMQConnection } from '../../../../../../src/Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';
import { RabbitMQConnectionDouble } from '../__mocks__/rabbit-mq-connection-double';
import { RabbitMQConnectionConfigurationMother } from './rabbit-mq-connection-configuration.mother';

export class RabbitMQConnectionMother {
	static async create(): Promise<RabbitMQConnection> {
		//const config = RabbitMQConnectionConfigurationMother.create();
		const connection = new RabbitMQConnection();
		await connection.connect();
		return connection;
	}

	static failOnPublish() {
		return new RabbitMQConnectionDouble(
			RabbitMQConnectionConfigurationMother.create()
		);
	}
}
