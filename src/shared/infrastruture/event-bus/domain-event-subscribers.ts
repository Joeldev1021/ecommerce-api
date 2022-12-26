import { DomainEvent } from "../../domain/domain-event";
import { IDomainEventSubscriber } from "../../domain/domain-event-subscriber";
import { AwilixContainer } from "awilix";

export class DomainEventSubscribers {
  private constructor(public items: IDomainEventSubscriber<DomainEvent>[]) {}

  static from(container: AwilixContainer): DomainEventSubscribers {
    const subscribers: Array<IDomainEventSubscriber<DomainEvent>> = [];
    const categoryCreatedHandler = container.resolve<
      IDomainEventSubscriber<DomainEvent>
    >("categoryCreatedHandler");
    subscribers.push(categoryCreatedHandler);

    return new DomainEventSubscribers(subscribers);
  }
}
