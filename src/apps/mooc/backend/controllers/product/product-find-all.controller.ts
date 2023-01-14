import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ProductFindAllUseCase } from '../../../../../Contexts/product/application/find-all/product-find-all.usecase';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class ProductFindAllController {
	constructor(
		@inject(CONTAINER_TYPES.productFindAllUseCase)
		private readonly _productFindAllUseCase: ProductFindAllUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const product = this._productFindAllUseCase.execute();
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
