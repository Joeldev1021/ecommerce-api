import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ProductCreateUseCase } from '../../../../../Contexts/product/application/usecases/product-create-usecase';
import { PriceVO } from '../../../../../Contexts/shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../../../Contexts/shared/domain/value-objects/quantity.vo';
import { DescriptionVO } from '../../../../../Contexts/shared/domain/value-objects/description.vo';
import { UsernameVO } from '../../../../../Contexts/shared/domain/value-objects/username.vo';
import { StateVO } from '../../../../../Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

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
				new UuidVO(id),
				new UsernameVO(name),
				new DescriptionVO(description),
				new UuidVO(categoryId),
				new PriceVO(price),
				new QuantityVO(quantity),
				new StateVO(state)
			);
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
