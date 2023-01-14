import { CategoryDescriptionMother } from '../domain/category-description.mother';
import { CategoryIdMother } from '../domain/category-id.mother';
import { CategoryNameMother } from '../domain/category-name.mother';
import { CategoryStateMother } from '../domain/category-state.mother';
import { CategoryCreateCommand } from '../../../../src/Contexts/category/domain/command/category-created.command';
import { CategoryId } from '../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { CategoryName } from '../../../../src/Contexts/category/domain/value-objects/category-name.vo';
import { CategoryDesc } from '../../../../src/Contexts/category/domain/value-objects/category-description.vo';
import { CategoryState } from '../../../../src/Contexts/category/domain/value-objects/category-state.vo';

export class CategoryCreateCommandMother {
	static create(
		id: CategoryId,
		name: CategoryName,
		description: CategoryDesc,
		state: CategoryState
	): CategoryCreateCommand {
		return {
			id: id.value,
			name: name.value,
			description: description.value,
			state: state.value,
		};
	}

	static random(): CategoryCreateCommand {
		return this.create(
			CategoryIdMother.random(),
			CategoryNameMother.random(),
			CategoryDescriptionMother.random(),
			CategoryStateMother.random()
		);
	}

	//todo error
	static invalid(): CategoryCreateCommand {
		return {
			id: CategoryIdMother.random().value,
			name: CategoryNameMother.random().value,
			description: CategoryDescriptionMother.random().value,
			state: CategoryStateMother.random().value,
		};
	}
}
