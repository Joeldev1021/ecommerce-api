import { QuantityVO } from '../../../../src/Contexts/shared/domain/value-objects/quantity.vo';
import { QuantityMother } from '../../shared/domain/quantity.mother';

export class ProductQuantityMother {
	static create(value: number): QuantityVO {
		return new QuantityVO(value);
	}

	static random(): QuantityVO {
		return this.create(QuantityMother.random());
	}
}
