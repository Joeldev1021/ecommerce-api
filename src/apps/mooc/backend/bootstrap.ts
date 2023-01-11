import 'reflect-metadata';
import { IEventBus } from '../../../Contexts/shared/domain/interface/event-bus';
import { DomainEventSubscribers } from '../../../Contexts/shared/infrastruture/event-bus/domain-event-subscribers';
import { TypeOrmClientFactory } from '../../../Contexts/shared/infrastruture/persistance/typeorm-client-factory';
import { container } from './dependency-injection/container';
import { CONTAINER_TYPES } from './dependency-injection/container.types';
import { Server } from './server';

export class Bootstrap {
	private server: Server;

	start(): void {
		this.server = new Server();
		this.server.listen();
		this.connectDB();
		this.configureEventBus();
	}

	private async connectDB(): Promise<void> {
		await TypeOrmClientFactory.createConnection();
	}

	private async configureEventBus(): Promise<void> {
		const eventBus = container.get<IEventBus>(CONTAINER_TYPES.rabbitMqEventBus);
		const subscribers = DomainEventSubscribers.from(container);
		await eventBus.addSubscribers(subscribers);
	}
}

new Bootstrap().start();
