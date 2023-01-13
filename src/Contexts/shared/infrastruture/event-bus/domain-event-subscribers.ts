import { DomainEvent } from '../../domain/domain-event';
import { IDomainEventSubscriber } from '../../domain/interface/domain-event-subscriber';
import { Container } from 'inversify';
import { TagHandler } from '../../../../apps/mooc/backend/dependency-injection/container.types';

export class DomainEventSubscribers {
	constructor(public items: Array<IDomainEventSubscriber<DomainEvent>>) {}

	static from(container: Container): DomainEventSubscribers {
		const subscribers = container.getAll<IDomainEventSubscriber<DomainEvent>>(
			TagHandler.EventHandlers
		);
		return new DomainEventSubscribers(subscribers);
	}
}
