import { injectable } from 'inversify';
import { DomainEvent, IDomainEventClass } from '../../domain/domain-event';
import { DomainEventSubscribers } from './domain-event-subscribers';

interface IDomainEventJSON {
	type: string;
	aggregateId: string;
	attributes: string;
	id: string;
	occurredOn: string;
}

@injectable()
export class DomainEventDeserializer extends Map<string, IDomainEventClass> {
	static configure(
		subscribers: DomainEventSubscribers
	): DomainEventDeserializer {
		const mapping = new DomainEventDeserializer();
		subscribers.items.forEach(subscriber => {
			subscriber.subscribedTo().forEach(mapping.registerEvent.bind(mapping));
		});

		return mapping;
	}

	private registerEvent(domainEvent: IDomainEventClass): void {
		const eventName = domainEvent.EVENT_NAME;
		this.set(eventName, domainEvent);
	}

	deserialize(event: string): DomainEvent {
		const eventData = JSON.parse(event).data as IDomainEventJSON;
		const { type, aggregateId, attributes, id, occurredOn } = eventData;
		const eventClass = super.get(type);

		if (!eventClass) {
			throw Error(`DomainEvet mapping not found for event ${type}`);
		}

		return eventClass.fromPrimitives({
			aggregateId,
			attributes,
			occurredOn: new Date(occurredOn),
			eventId: id,
		});
	}
}
