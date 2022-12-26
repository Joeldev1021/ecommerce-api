import { DomainEvent } from "./domain-event";

export abstract class AggregateRoot {
  private domainEvents: DomainEvent[];
  constructor() {
    this.domainEvents = [];
  }

  pullDomainEvents(): DomainEvent[] {
    const domainEvents = this.domainEvents.slice();
    this.domainEvents = [];
    return domainEvents;
  }

  record(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  abstract toPrimitives(): any;
}
