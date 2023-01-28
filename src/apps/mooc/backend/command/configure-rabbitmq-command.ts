import 'reflect-metadata';
import { RabbitMQConnection } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';
import { CONTAINER_TYPES } from '../dependency-injection/container.types';
import { container } from '../dependency-injection/container';
import { DomainEventSubscribers } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-subscribers';
import { RabbitMqConfigurer } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbitmq-configurer';
import { configSettings } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/config';
export class ConfigureRabbitMQCommand {
	static async run(): Promise<void> {
		const connection = container.get<RabbitMQConnection>(
			CONTAINER_TYPES.rabbitMQConnection
		);

		await connection.connect();

		const configurer = new RabbitMqConfigurer(connection);

		const subscribers = DomainEventSubscribers.from(container).items;
		await configurer.configure({
			exchange: configSettings.exchangeName,
			subscribers,
		});

		await connection.close();
	}
}
