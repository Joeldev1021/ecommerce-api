import { PriceMother } from './../../shared/domain/price-mother';
import { CartItemTotalPrice } from './../../../../src/Contexts/cart/domain/value-object/cart-item-total-price.vo';
import { QuantityMother } from './../../shared/domain/quantity.mother';
import { CartItemQuantity } from './../../../../src/Contexts/cart/domain/value-object/cart-item-quantity.vo';
import { UuidMother } from './../../shared/domain/uuid.mother';
import { CartItemId } from '../../../../src/Contexts/cart/domain/value-object/cart-item-id.vo';

export class CartItemIdMother {
	static create(value: string): CartItemId {
		return new CartItemId(value);
	}

	static random(): CartItemId {
		return this.create(UuidMother.random());
	}
}
