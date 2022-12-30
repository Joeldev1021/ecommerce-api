import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ProductFindAllUseCase } from '@product/application/usecases/product-find-all.usecase';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class ProductFindAllController {
	constructor(
		@inject(containerTypes.productFindAllUseCase)
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
