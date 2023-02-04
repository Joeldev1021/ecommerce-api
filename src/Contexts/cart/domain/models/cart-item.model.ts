import { CartId } from './../value-object/cart-id.vo';
import { CartItemTotalPrice } from './../value-object/cart-item-total-price.vo';
import { CartItemQuantity } from '../value-object/cart-item-quantity.vo';
import { ProductId } from './../../../product/domain/value-objects/product-id.vo';
import { CartItemId } from './../value-object/cart-item-id.vo';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';

export interface ICartItemPrimitives extends AggregateRootPrimitives {
	readonly cartItemId: string;
	readonly cartId: string;
	readonly productId: string;
	readonly quantity: number;
	readonly totalPrice: number;
}
export class CartItemModel extends AggregateRoot {
	/**
	 * The constructor function is a function that is called when a new instance of a class is created
	 * @param {CartItemId} cartItemId - The unique identifier for the cart item.
	 * @param {CartId} cartId - The id of the cart that this cart item belongs to.
	 * @param {ProductId} productId - The id of the product that is being added to the cart.
	 * @param {CartItemQuantity} quantity - The number of items in the cart.
	 * @param {CartItemTotalPrice} totalPrice - The total price of the cart item.
	 */
	constructor(
		readonly cartItemId: CartItemId,
		readonly cartId: CartId,
		readonly productId: ProductId,
		readonly quantity: CartItemQuantity,
		readonly totalPrice: CartItemTotalPrice
	) {
		super();
	}

	static toDomain(cartItem: ICartItemPrimitives): CartItemModel {
		return new CartItemModel(
			new CartItemId(cartItem.cartItemId),
			new CartId(cartItem.cartId),
			new ProductId(cartItem.productId),
			new CartItemQuantity(cartItem.quantity),
			new CartItemTotalPrice(cartItem.totalPrice)
		);
	}

	toPrimitives(): ICartItemPrimitives {
		return {
			cartItemId: this.cartItemId.value,
			cartId: this.cartId.value,
			productId: this.productId.value,
			quantity: this.quantity.value,
			totalPrice: this.totalPrice.value,
		};
	}
}
