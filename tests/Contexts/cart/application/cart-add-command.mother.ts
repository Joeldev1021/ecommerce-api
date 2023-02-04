import { CartIdMother } from './../domain/cart-id.mother';
import { ProductIdMother } from './../../product/domain/product-id.mother';
import {
	CartAddItemCommand,
	ICartProducts,
} from './../../../../src/Contexts/cart/domain/command/cart-add-item.command';
import { CartItemIdMother } from '../domain/cart-item-id.mother';
import { CartItemTotalPriceMother } from '../domain/cart-item-total-price.mother';
import { CartItemQuantityMother } from '../domain/cart-item-quantity.mother';

export class CartAddItemCommandMother {
	static create(cartProducts: ICartProducts[]): CartAddItemCommand {
		return { cartProducts };
	}

	static random(): CartAddItemCommand {
		return this.create(this.cartProductRandom());
	}

	static cartProductRandom(): ICartProducts[] {
		const cartId = CartIdMother.random().value;
		return [0, 1, 2].map(i => {
			return {
				id: CartItemIdMother.random().value,
				cartId,
				productId: ProductIdMother.random().value,
				quantity: CartItemQuantityMother.random().value,
				price: CartItemTotalPriceMother.random().value,
			};
		});
	}
}
