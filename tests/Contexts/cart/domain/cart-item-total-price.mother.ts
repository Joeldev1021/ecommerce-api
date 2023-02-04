import { PriceMother } from './../../shared/domain/price-mother';
import { CartItemTotalPrice } from './../../../../src/Contexts/cart/domain/value-object/cart-item-total-price.vo';
export class CartItemTotalPriceMother {
	static create(value: number): CartItemTotalPrice {
		return new CartItemTotalPrice(value);
	}

	static random(): CartItemTotalPrice {
		return this.create(parseFloat(PriceMother.random()));
	}
}
