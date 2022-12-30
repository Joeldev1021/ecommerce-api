import { IEventBus } from '@shared/domain/event-bus';
import { DomainEventSubscribers } from '@shared/infrastruture/event-bus/domain-event-subscribers';
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

	configureEventBus(): void {
		// const eventHandlers = container.resolve(handlersType.EventHandler);

		const eventBus = container.resolve<IEventBus>(containerTypes.eventBus);
		//eventBus.addSubscribers(DomainEventSubscribers.from(container));
		// DomainEventSubscribers.from(container);
	}
}

new Bootstrap().start();
