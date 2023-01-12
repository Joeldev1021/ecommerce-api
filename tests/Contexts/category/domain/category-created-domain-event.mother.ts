import { CategoryCreatedEvent } from '../../../../src/Contexts/category/domain/events/category-created.event';
import { CategoryModel } from '../../../../src/Contexts/category/domain/models/category.model';

export class CategoryCreatedEventMother {
	static create({
		aggregateId,
		eventId,
		categoryId,
		occurredOn,
	}: {
		aggregateId: string;
		eventId?: string;
		categoryId: string;
		occurredOn?: Date;
	}): CategoryCreatedEvent {
		return new CategoryCreatedEvent({
			aggregateId,
			eventId,
			categoryId,
			occurredOn,
		});
	}

	static fromCourse(category: CategoryModel): CategoryCreatedEvent {
		return new CategoryCreatedEvent({
			aggregateId: category.id.value,
			eventId: category.name.value,
			categoryId: category.id.value,
		});
	}
}
