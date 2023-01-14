import { CategoryId } from '../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { UuidMother } from '../../shared/domain/uuid.mother';

export class CategoryIdMother {
	static create(value: string): CategoryId {
		return new CategoryId(value);
	}

	static random(): CategoryId {
		return this.create(UuidMother.random());
	}
}
