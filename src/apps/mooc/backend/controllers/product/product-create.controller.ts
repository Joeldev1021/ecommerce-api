import { NextFunction, Request, Response } from 'express';
import { DescriptionVO } from '@shared/domain/value-objects/description.vo';
import { NameVO } from '@shared/domain/value-objects/name.vo';
import { PriceVO } from '@product/domain/value-objects/price.vo';
import { StateVO } from '@shared/domain/value-objects/state.vo';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { QuantityVO } from '@product/domain/value-objects/quantity.vo';
import { inject, injectable } from 'tsyringe';
import { ProductCreateUseCase } from '@product/application/usecases/product-create-usecase';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class ProductCreateController {
	constructor(
		@inject(containerTypes.productCreateUseCase)
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
