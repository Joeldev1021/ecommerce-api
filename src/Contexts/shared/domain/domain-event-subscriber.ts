import { DomainEvent, IDomainEventClass } from "./domain-event";

export interface IDomainEventSubscriber<T extends DomainEvent> {
  subscribedTo(): IDomainEventClass[];
  on(event: T): Promise<void>;
}
