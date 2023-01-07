import { DomainEventSubscribers } from '../../infrastruture/event-bus/domain-event-subscribers';
import { DomainEvent } from '../domain-event';

export interface IEventBus {
	publish(events: DomainEvent[]): Promise<void>;
	addSubscribers(subscribers: DomainEventSubscribers): void;
}
