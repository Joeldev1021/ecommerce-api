import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ProductCreateUseCase } from '../../../../../Contexts/product/application/create/product-create-usecase';
import { PriceVO } from '../../../../../Contexts/shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../../../Contexts/shared/domain/value-objects/quantity.vo';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { ProductName } from '../../../../../Contexts/product/domain/value-objects/product-name.vo';
import { ProductId } from '../../../../../Contexts/product/domain/value-objects/product-id.vo';
import { ProductDesc } from '../../../../../Contexts/product/domain/value-objects/product-description.vo';
import { ProductState } from '../../../../../Contexts/product/domain/value-objects/product-state.vo';
import { CategoryId } from '../../../../../Contexts/category/domain/value-objects/category-id.vo';

@injectable()
export class ProductCreateController {
	constructor(
		@inject(CONTAINER_TYPES.productCreateUseCase)
		private readonly _productCreateUseCase: ProductCreateUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, categoryId, price, quantity, state } =
			req.body;
		try {
			const product = this._productCreateUseCase.execute(
				new ProductId(id),
				new ProductName(name),
				new ProductDesc(description),
				new CategoryId(categoryId),
				new PriceVO(price),
				new QuantityVO(quantity),
				new ProductState(state)
			);
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
