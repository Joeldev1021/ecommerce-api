import { container, handlersType } from "./container";
import { Server } from "./index";
import { IEventBus } from "./shared/domain/event-bus";
import { DomainEventSubscribers } from "./shared/infrastruture/event-bus/domain-event-subscribers";

class Boostrap {
  private server: Server;

  start() {
    this.server = new Server();
    this.server.listen();
    this.configureEventBus();
  }

  configureEventBus() {
    //const eventHandlers = container.resolve(handlersType.EventHandler);
    const eventBus = container.resolve<IEventBus>("eventBus");
    eventBus.addSubscribers(DomainEventSubscribers.from(container));
    // DomainEventSubscribers.from(container);
  }
}

new Boostrap().start();
