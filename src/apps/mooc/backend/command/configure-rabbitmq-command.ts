import 'reflect-metadata';
import { RabbitMQConfigFactory } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-confg-factory';
import { RabbitMQConnection } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';
import { containerTypes } from '../dependency-injection/container.types';
import { container } from '../dependency-injection/container';
import { RabbitMQConfigurer } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbitmq-configurer';
import { DomainEventSubscribers } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-subscribers';
export class ConfigureRabbitMQCommand {
	static async run(): Promise<void> {
		const connection = container.resolve<RabbitMQConnection>(
			containerTypes.rabbitMQConnection
		);
		const { name: exchange } = container
			.resolve<RabbitMQConfigFactory>(containerTypes.rabbitMQConfigFactory)
			.createConfig().exchangeSettings;

		await connection.connect();

		const configurer = container.resolve<RabbitMQConfigurer>(
			containerTypes.rabbitMQConfigurer
		);
		const subscribers = DomainEventSubscribers.from(container).items;
		await configurer.configure({ exchange, subscribers });

		await connection.close();
	}
}
