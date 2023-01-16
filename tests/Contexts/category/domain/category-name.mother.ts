import { CategoryName } from '../../../../src/Contexts/category/domain/value-objects/category-name.vo';
import { NameMother } from '../../shared/domain/name.mother';
export class CategoryNameMother {
	static create(value: string): CategoryName {
		return new CategoryName(value);
	}

	static random(): CategoryName {
		return this.create(NameMother.random());
	}
}
