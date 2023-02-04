import { injectable } from 'inversify';
import { CartItemTotalPrice } from '../../domain/value-object/cart-item-total-price.vo';
import { CartItemModel } from './../../domain/models/cart-item.model';
import { ICartProductVO } from './cart-add-item.command-handler';

@injectable()
export class CartAddItemUseCase {
	async execute(cartItems: ICartProductVO[]): Promise<void> {
		const cartProducts = cartItems.map(product => {
			const totalPrice = parseFloat(
				Number(product.price.value * product.quantity.value).toFixed(2)
			);

			return new CartItemModel(
				product.id,
				product.cartId,
				product.productId,
				product.quantity,
				new CartItemTotalPrice(totalPrice)
			);
		});

		console.log(cartProducts);
	}
}
