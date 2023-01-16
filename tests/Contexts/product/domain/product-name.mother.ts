import { ProductName } from '../../../../src/Contexts/product/domain/value-objects/product-name.vo';
import { NameProductMother } from '../../shared/domain/product-name.mother';
import { UuidMother } from '../../shared/domain/uuid.mother';

export class ProductNameMother {
	static create(value: string): ProductName {
		return new ProductName(value);
	}

	static random(): ProductName {
		return this.create(NameProductMother.random());
	}
}
