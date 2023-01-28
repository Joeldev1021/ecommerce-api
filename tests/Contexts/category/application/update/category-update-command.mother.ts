import { CategoryState } from './../../../../../src/Contexts/category/domain/value-objects/category-state.vo';
import { CategoryDesc } from './../../../../../src/Contexts/category/domain/value-objects/category-description.vo';
import { CategoryName } from './../../../../../src/Contexts/category/domain/value-objects/category-name.vo';
import { CategoryId } from './../../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { CategoryStateMother } from './../../domain/category-state.mother';
import { CategoryDescriptionMother } from './../../domain/category-description.mother';
import { CategoryNameMother } from './../../domain/category-name.mother';
import { CategoryIdMother } from './../../domain/category-id.mother';
import { CategoryUpdateCommand } from './../../../../../src/Contexts/category/domain/command/category-update-command';

export class CategoryUpdateCommandMother {
	static create(
		id: CategoryId,
		name: CategoryName,
		description: CategoryDesc,
		state: CategoryState
	): CategoryUpdateCommand {
		return {
			id: id.value,
			name: name.value,
			description: description.value,
			state: state.value,
		};
	}

	static random(): CategoryUpdateCommand {
		return this.create(
			CategoryIdMother.random(),
			CategoryNameMother.random(),
			CategoryDescriptionMother.random(),
			CategoryStateMother.random()
		);
	}

	//todo error
	static invalid(): CategoryUpdateCommand {
		return {
			id: CategoryIdMother.random().value,
			name: CategoryNameMother.random().value,
			description: CategoryDescriptionMother.random().value,
			state: CategoryStateMother.random().value,
		};
	}
}
