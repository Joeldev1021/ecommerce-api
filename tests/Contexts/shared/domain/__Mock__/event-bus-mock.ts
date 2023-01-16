import { DomainEvent } from '../../../../../src/Contexts/shared/domain/domain-event';
import { IEventBus } from '../../../../../src/Contexts/shared/domain/interface/event-bus';
import { DomainEventSubscribers } from '../../../../../src/Contexts/shared/infrastruture/event-bus/domain-event-subscribers';

export default class EventBusMock implements IEventBus {
	private publishSpy = jest.fn();

	async publish(events: DomainEvent[]) {
		this.publishSpy(events);
	}

	addSubscribers(subscribers: DomainEventSubscribers): void {}

	assertLastPublishedEventIs(expectedEvent: DomainEvent) {
		console.log('event', expectedEvent);
		const publishSpyCalls = this.publishSpy.mock.calls;

		expect(publishSpyCalls.length).toBeGreaterThan(0);

		const lastPublishSpyCall = publishSpyCalls[publishSpyCalls.length - 1];
		const lastPublishedEvent = lastPublishSpyCall[0][0];

		const expected = this.getDataFromDomainEvent(expectedEvent);
		const published = this.getDataFromDomainEvent(lastPublishedEvent);

		expect(expected).toMatchObject(published);
	}

	private getDataFromDomainEvent(event: DomainEvent) {
		const { eventId, occurredOn, ...attributes } = event;

		return attributes;
	}
}
