import { PriceVO } from '../../../../src/Contexts/shared/domain/value-objects/price.vo';
import { PriceMother } from '../../shared/domain/price-mother';

export class ProductPriceMother {
	static create(value: number): PriceVO {
		return new PriceVO(value);
	}

	static random(): PriceVO {
		return this.create(parseFloat(PriceMother.random()));
	}
}
