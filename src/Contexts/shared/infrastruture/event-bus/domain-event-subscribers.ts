import { DomainEvent } from '../../domain/domain-event';
import { IDomainEventSubscriber } from '../../domain/domain-event-subscriber';
import { DependencyContainer } from 'tsyringe';
import { TagEventHandler } from '../../../../apps/mooc/backend/dependency-injection/container';

export class DomainEventSubscribers {
	private constructor(
		public items: Array<IDomainEventSubscriber<DomainEvent>>
	) {}

	static from(container: DependencyContainer): DomainEventSubscribers {
		const subscribers = container.resolveAll<
			IDomainEventSubscriber<DomainEvent>
		>(TagEventHandler.EventHandler);

		return new DomainEventSubscribers(subscribers);
	}
}
