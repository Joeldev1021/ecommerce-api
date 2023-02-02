import { CartId } from './../value-object/cart-id.vo';
import { CartItemTotalPrice } from './../value-object/cart-item-total-price.vo';
import { CartItemQuantity } from '../value-object/cart-item-quantity.vo';
import { ProductId } from './../../../product/domain/value-objects/product-id.vo';
import { CartItemId } from './../value-object/cart-item-id.vo';
export class CartItemModel {
	constructor(
		readonly cartItemId: CartItemId,
		readonly cartId: CartId,
		readonly productId: ProductId,
		readonly quantity: CartItemQuantity,
		readonly totalPrice: CartItemTotalPrice
	) {}
}
