import 'reflect-metadata';
import { IEventBus } from '../../../Contexts/shared/domain/interface/event-bus';
import { DomainEventSubscribers } from '../../../Contexts/shared/infrastruture/event-bus/domain-event-subscribers';
import { container } from './dependency-injection/container';
import { CONTAINER_TYPE } from './dependency-injection/container.types';
import { Server } from './server';

export class Bootstrap {
	private server: Server;

	start(): void {
		this.server = new Server();
		this.server.listen();
		//this.configureEventBus();
	}

	private async configureEventBus(): Promise<void> {
		const eventBus = container.resolve<IEventBus>(
			CONTAINER_TYPE.rabbitMqEventBus
		);
		const subscribers = DomainEventSubscribers.from(container);
		await eventBus.addSubscribers(subscribers);
	}
}

new Bootstrap().start();
