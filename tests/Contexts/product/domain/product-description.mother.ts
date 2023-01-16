import { ProductDesc } from '../../../../src/Contexts/product/domain/value-objects/product-description.vo';
import { DescriptionMother } from '../../shared/domain/description.mother';

export class ProductDescriptionMother {
	static create(value: string): ProductDesc {
		return new ProductDesc(value);
	}

	static random(): ProductDesc {
		return this.create(DescriptionMother.random());
	}
}
