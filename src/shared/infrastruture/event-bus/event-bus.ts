import { EventEmitter } from "events";
import { DomainEvent } from "../../domain/domain-event";
import { IEventBus } from "../../domain/event-bus";
import { DomainEventSubscribers } from "./domain-event-subscribers";

export class EventBus implements IEventBus {
  private _event: EventEmitter;
  constructor() {
    this._event = new EventEmitter();
  }
  async publish(events: DomainEvent[]): Promise<void> {
    events.map((event) => this._event.emit(event.eventName, event));
  }

  addSubscribers(subscribers: DomainEventSubscribers): void {
    subscribers.items.forEach((subscriber) => {
      subscriber.subscribedTo().forEach((event) => {
        this._event.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
      });
    });
  }
}
