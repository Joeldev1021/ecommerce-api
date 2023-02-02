import { ProductId } from './../../../product/domain/value-objects/product-id.vo';
import { CartItemPrice } from './../../domain/value-object/cart-item-price.vo';
import { CartId } from './../../domain/value-object/cart-id.vo';
import { CONTAINER_TYPES } from './../../../../apps/mooc/backend/dependency-injection/container.types';
import { CartAddItemUseCase } from './cart-add-item.usecase';
import { CartAddItemCommand } from './../../domain/command/cart-add-item.command';
import { ICommandHandler } from './../../../shared/domain/interface/command-handler';
import { inject, injectable } from 'inversify';
import { Command } from '../../../shared/domain/command';
import { CartItemId } from '../../domain/value-object/cart-item-id.vo';
import { CartItemQuantity } from '../../domain/value-object/cart-item-quantity.vo';

export interface ICartProductVO {
	id: CartItemId;
	cartId: CartId;
	productId: ProductId;
	price: CartItemPrice;
	quantity: CartItemQuantity;
}

@injectable()
export class CartAddItemCommandHandler
	implements ICommandHandler<CartAddItemCommand>
{
	constructor(
		@inject(CONTAINER_TYPES.cartAddItemUseCase)
		private _cartAddItemUseCase: CartAddItemUseCase
	) {}

	subscribeTo(): Command {
		return CartAddItemCommand;
	}

	async handle(command: CartAddItemCommand): Promise<void> {
		const cartProductsVO = command.cartProducts.map(product => {
			return {
				id: new CartItemId(product.cartItemId),
				cartId: new CartId(product.cartId),
				productId: new ProductId(product.productId),
				price: new CartItemPrice(product.price),
				quantity: new CartItemQuantity(product.quantity),
			};
		});
		await this._cartAddItemUseCase.execute(cartProductsVO);
	}
}
