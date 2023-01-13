import { injectable } from 'inversify';
import { IDomainEventClass } from '../../../shared/domain/domain-event';
import { IDomainEventSubscriber } from '../../../shared/domain/interface/domain-event-subscriber';
import { CategoryCreatedEvent } from './category-created.event';

@injectable()
export class CategoryCreatedHandler
	implements IDomainEventSubscriber<CategoryCreatedEvent>
{
	subscribedTo(): IDomainEventClass[] {
		return [CategoryCreatedEvent];
	}

	async on(event: CategoryCreatedEvent): Promise<void> {
		const { eventId, occurredOn, categoryId, aggregateId } = event;
		console.log('categoryCreatedEVent============', eventId);
		console.log(occurredOn);
	}
}
