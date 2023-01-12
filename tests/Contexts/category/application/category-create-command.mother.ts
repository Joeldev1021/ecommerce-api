import { DescriptionVO } from '../../../../src/Contexts/shared/domain/value-objects/description.vo';
import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { CategoryDescriptionMother } from '../domain/category-description.mother';
import { CategoryIdMother } from '../domain/category-id.mother';
import { CategoryNameMother } from '../domain/category-name.mother';
import { CategoryStateMother } from '../domain/category-state.mother';
import { CategoryCreateCommand } from '../../../../src/Contexts/category/domain/command/category-created.command';

export class CreateCourseCommandMother {
	static create(
		id: UuidVO,
		name: NameVO,
		description: DescriptionVO,
		state: StateVO
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
