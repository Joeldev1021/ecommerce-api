import { DescriptionVO } from '../../../../src/Contexts/shared/domain/value-objects/description.vo';
import { DescriptionMother } from '../../shared/domain/description.mother';

export class CategoryDescriptionMother {
	static create(value: string): DescriptionVO {
		return new DescriptionVO(value);
	}

	static random(): DescriptionVO {
		return this.create(DescriptionMother.random());
	}
}
