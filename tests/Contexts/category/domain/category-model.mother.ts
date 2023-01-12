import { CategoryCreateCommand } from '../../../../src/Contexts/category/domain/command/category-created.command';
import { CategoryModel } from '../../../../src/Contexts/category/domain/models/category.model';
import { DescriptionVO } from '../../../../src/Contexts/shared/domain/value-objects/description.vo';
import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { CategoryDescriptionMother } from './category-description.mother';
import { CategoryIdMother } from './category-id.mother';
import { CategoryNameMother } from './category-name.mother';
import { CategoryStateMother } from './category-state.mother';

export class CategoryModelMother {
	static create(
		id: UuidVO,
		name: NameVO,
		description: DescriptionVO,
		state: StateVO
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
