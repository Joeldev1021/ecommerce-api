import { CartAddItemUseCase } from './../../../../../Contexts/cart/application/cart-add-item/cart-add-item.usecase';
import { CONTAINER_TYPES } from './../../dependency-injection/container.types';
import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';

@injectable()
export class CartAddItemController {
	constructor(
		@inject(CONTAINER_TYPES.cartAddItemUseCase)
		private _cartAddItemUseCase: CartAddItemUseCase
	) {}

	async execute(req: Request, res: Response): Promise<void> {
		const products = req.body;

		await this._cartAddItemUseCase.execute(products);
	}
}
