import { RabbitMQConnection } from '../../../../../../src/Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';

export class RabbitMQConnectionDouble extends RabbitMQConnection {
	async publish(params: any): Promise<void> {
		throw new Error();
	}
}
