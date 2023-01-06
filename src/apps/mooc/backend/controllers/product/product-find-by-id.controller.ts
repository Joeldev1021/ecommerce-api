import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ProductFindByIdUseCase } from '../../../../../Contexts/product/application/usecases/product-find-by-id.usecase';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { CONTAINER_TYPE } from '../../dependency-injection/container.types';

@injectable()
export class ProductFindByIdController {
	constructor(
		@inject(CONTAINER_TYPE.productFindByIdUseCase)
		private _productFindByIdUseCase: ProductFindByIdUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const productId = req.params.id;
		try {
			const product = this._productFindByIdUseCase.execute(
				new UuidVO(productId)
			);
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}