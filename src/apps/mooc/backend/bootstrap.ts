import 'reflect-metadata';
import { IEventBus } from '../../../Contexts/shared/domain/event-bus';
import { DomainEventSubscribers } from '../../../Contexts/shared/infrastruture/event-bus/domain-event-subscribers';
import { RabbitMQConnection } from '../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';
import { container } from './dependency-injection/container';
import { containerTypes } from './dependency-injection/container.types';
import { Server } from './server';

export class Bootstrap {
	private server: Server;

	start(): void {
		this.server = new Server();
		this.server.listen();
		this.configureEventBus();
	}

	private async configureEventBus(): Promise<void> {
		// const eventHandlers = container.resolve(handlersType.EventHandler);
		const eventBus = container.resolve<IEventBus>(
			containerTypes.rabbitMqEventBus
		);
		const rabbitMQConnection = container.resolve<RabbitMQConnection>(
			containerTypes.rabbitMQConnection
		);
		await rabbitMQConnection.connect();
		eventBus.addSubscribers(DomainEventSubscribers.from(container));
	}
}

new Bootstrap().start();
