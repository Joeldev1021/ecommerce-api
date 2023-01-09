import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ProductCreateUseCase } from '../../../../../Contexts/product/application/usecases/product-create-usecase';
import { PriceVO } from '../../../../../Contexts/product/domain/value-objects/price.vo';
import { QuantityVO } from '../../../../../Contexts/product/domain/value-objects/quantity.vo';
import { DescriptionVO } from '../../../../../Contexts/shared/domain/value-objects/description.vo';
import { NameVO } from '../../../../../Contexts/shared/domain/value-objects/name.vo';
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
				new NameVO(name),
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
