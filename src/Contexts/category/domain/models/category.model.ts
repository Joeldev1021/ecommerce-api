import { CategoryCreatedEvent } from '../events/category-created.event';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';
import { CategoryDesc } from '../value-objects/category-description.vo';
import { CategoryId } from '../value-objects/category-id.vo';
import { CategoryState } from '../value-objects/category-state.vo';
import { CategoryName } from '../value-objects/category-name.vo';

export interface ICategoryPrimitives extends AggregateRootPrimitives {
	category_id: string;
	name: string;
	image?: string;
	description: string;
	state: boolean;
}

export class CategoryModel extends AggregateRoot {
	constructor(
		public readonly id: CategoryId,
		public name: CategoryName,
		public description: CategoryDesc,
		//public image: string,
		public state: CategoryState
	) {
		super();
	}

	static create(
		id: CategoryId,
		name: CategoryName,
		description: CategoryDesc,
		//public image: string,
		state: CategoryState
	): CategoryModel {
		const category = new CategoryModel(id, name, description, state);

		category.record(
			new CategoryCreatedEvent({
				aggregateId: id.value,
				categoryId: id.value,
			})
		);

		return category;
	}

	static toDomain(category: ICategoryPrimitives): CategoryModel {
		return new CategoryModel(
			new CategoryId(category.category_id),
			new CategoryName(category.name),
			new CategoryDesc(category.description),
			new CategoryState(category.state)
		);
	}

	toPrimitives(): ICategoryPrimitives {
		return {
			category_id: this.id.value,
			name: this.name.value,
			description: this.description.value,
			state: this.state.value,
		};
	}
}
