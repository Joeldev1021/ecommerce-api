import { container } from './container';
import { Server } from './index';
import { IEventBus } from './shared/domain/event-bus';
import { DomainEventSubscribers } from './shared/infrastruture/event-bus/domain-event-subscribers';

export class Boostrap {
	private server: Server;

	start(): void {
		this.server = new Server();
		this.server.listen();
		this.configureEventBus();
	}

	configureEventBus(): void {
		// const eventHandlers = container.resolve(handlersType.EventHandler);
		const eventBus = container.resolve<IEventBus>('eventBus');
		eventBus.addSubscribers(DomainEventSubscribers.from(container));
		// DomainEventSubscribers.from(container);
	}
}

new Boostrap().start();
