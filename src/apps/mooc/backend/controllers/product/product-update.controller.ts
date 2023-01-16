import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ProductUpdateUseCase } from '../../../../../Contexts/product/application/update/product-update.usecase';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { PriceVO } from '../../../../../Contexts/shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../../../Contexts/shared/domain/value-objects/quantity.vo';
import { ProductId } from '../../../../../Contexts/product/domain/value-objects/product-id.vo';
import { ProductName } from '../../../../../Contexts/product/domain/value-objects/product-name.vo';
import { ProductDesc } from '../../../../../Contexts/product/domain/value-objects/product-description.vo';
import { CategoryId } from '../../../../../Contexts/category/domain/value-objects/category-id.vo';
import { ProductState } from '../../../../../Contexts/product/domain/value-objects/product-state.vo';

@injectable()
export class ProductUpdateController {
	constructor(
		@inject(CONTAINER_TYPES.productUpdateUseCase)
		private readonly _productUpdateUseCase: ProductUpdateUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, state, price, quantity, categoryId } =
			req.body;
		try {
			const product = this._productUpdateUseCase.execute(
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
