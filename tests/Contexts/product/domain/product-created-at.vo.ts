import { ProductCreatedAt } from '../../../../src/Contexts/product/domain/value-objects/product-created-at.vo';
export class ProductCreatedAtMother {
	static create(value: Date): ProductCreatedAt {
		return new ProductCreatedAt(value);
	}

	static random(): ProductCreatedAt {
		return this.create(new Date());
	}
}
