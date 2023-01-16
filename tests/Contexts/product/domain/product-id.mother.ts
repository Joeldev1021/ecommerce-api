import { ProductId } from '../../../../src/Contexts/product/domain/value-objects/product-id.vo';
import { UuidMother } from '../../shared/domain/uuid.mother';

export class ProductIdMother {
	static create(value: string): ProductId {
		return new ProductId(value);
	}

	static random(): ProductId {
		return this.create(UuidMother.random());
	}
}
