import { QuantityMother } from './../../shared/domain/quantity.mother';
import { CartItemQuantity } from './../../../../src/Contexts/cart/domain/value-object/cart-item-quantity.vo';

export class CartItemQuantityMother {
	static create(value: number): CartItemQuantity {
		return new CartItemQuantity(value);
	}

	static random(): CartItemQuantity {
		return this.create(QuantityMother.random(10));
	}
}
