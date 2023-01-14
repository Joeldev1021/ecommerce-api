import { CategoryCreateCommand } from '../../../../src/Contexts/category/domain/command/category-created.command';
import { CategoryModel } from '../../../../src/Contexts/category/domain/models/category.model';
import { CategoryDesc } from '../../../../src/Contexts/category/domain/value-objects/category-description.vo';
import { CategoryId } from '../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { CategoryName } from '../../../../src/Contexts/category/domain/value-objects/category-name.vo';
import { CategoryState } from '../../../../src/Contexts/category/domain/value-objects/category-state.vo';
import { CategoryDescriptionMother } from './category-description.mother';
import { CategoryIdMother } from './category-id.mother';
import { CategoryNameMother } from './category-name.mother';
import { CategoryStateMother } from './category-state.mother';

export class CategoryModelMother {
	static create(
		id: CategoryId,
		name: CategoryName,
		description: CategoryDesc,
		state: CategoryState
	): CategoryModel {
		return new CategoryModel(id, name, description, state);
	}

	static from(command: CategoryCreateCommand): CategoryModel {
		return this.create(
			CategoryIdMother.create(command.id),
			CategoryNameMother.create(command.name),
			CategoryDescriptionMother.create(command.description),
			CategoryStateMother.create(command.state)
		);
	}

	static random(): CategoryModel {
		return this.create(
			CategoryIdMother.random(),
			CategoryNameMother.random(),
			CategoryDescriptionMother.random(),
			CategoryStateMother.random()
		);
	}
}
