import {
	DomainEvent,
	IDomainEventClass,
} from '../../../../../../src/Contexts/shared/domain/domain-event';
import { IDomainEventSubscriber } from '../../../../../../src/Contexts/shared/domain/interface/domain-event-subscriber';
import { DomainEventDummy } from './domain-event-dummy';

export class DomainEventSubscriberDummy
	implements IDomainEventSubscriber<DomainEventDummy>
{
	static failsFirstTime(): DomainEventSubscriberDummy {
		return new DomainEventSubscriberDummy({ failsFirstTime: true });
	}

	static alwaysFails(): DomainEventSubscriberDummy {
		return new DomainEventSubscriberDummy({ alwaysFails: true });
	}

	private events: DomainEvent[];
	private failsFirstTime = false;
	private alwaysFails = false;
	private alreadyFailed = false;

	constructor(params?: { failsFirstTime?: Boolean; alwaysFails?: Boolean }) {
		if (params?.failsFirstTime) {
			this.failsFirstTime = true;
		}
		if (params?.alwaysFails) {
			this.alwaysFails = true;
		}

		this.events = [];
	}

	subscribedTo(): IDomainEventClass[] {
		return [DomainEventDummy];
	}

	async on(domainEvent: DomainEventDummy): Promise<void> {
		if (this.alwaysFails) {
			throw new Error();
		}

		if (!this.alreadyFailed && this.failsFirstTime) {
			this.alreadyFailed = true;
			throw new Error();
		}

		this.events.push(domainEvent);
	}

	async assertConsumedEvents(events: DomainEvent[]): Promise<void> {
		return new Promise((resolve: Function, reject: Function) => {
			setTimeout(() => {
				try {
					expect(this.events.length).toEqual(events.length);
					expect(this.events).toEqual(events);
					resolve();
				} catch (error: any) {
					reject(error);
				}
			}, 400);
		});
	}
}
