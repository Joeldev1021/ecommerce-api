import { ProductState } from '../../../../src/Contexts/product/domain/value-objects/product-state.vo';
import { StateMother } from '../../shared/domain/state.mother';

export class ProductStateMother {
	static create(value: boolean): ProductState {
		return new ProductState(value);
	}

	static random(): ProductState {
		return this.create(StateMother.random());
	}
}
