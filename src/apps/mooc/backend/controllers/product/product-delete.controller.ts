import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ProductDeleteUseCase } from '../../../../../Contexts/product/application/usecases/product-delete.usecase';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class ProductDeleteController {
	constructor(
		@inject(containerTypes.productDeleteUseCase)
		private readonly _productDeleteUseCase: ProductDeleteUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const productId = req.params.id;
		try {
			const product = this._productDeleteUseCase.execute(new UuidVO(productId));
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
