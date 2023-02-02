import { UuidMother } from './../../shared/domain/uuid.mother';
import { BrandId } from './../../../../src/Contexts/brand/domain/value-objects/brand-id.vo';
export class BrandIdMother {
	static create(value: string): BrandId {
		return new BrandId(value);
	}

	static random(): BrandId {
		return this.create(UuidMother.random());
	}
}
