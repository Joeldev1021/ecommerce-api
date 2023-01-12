import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { NameMother } from '../../shared/domain/name.mother';
export class CategoryNameMother {
	static create(value: string): NameVO {
		return new NameVO(value);
	}

	static random(): NameVO {
		return this.create(NameMother.random());
	}
}
