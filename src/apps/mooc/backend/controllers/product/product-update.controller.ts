import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import { containerTypes } from '../../dependency-injection/container.types';
import { DescriptionVO } from '@shared/domain/value-objects/description.vo';
import { NameVO } from '@shared/domain/value-objects/name.vo';
import { StateVO } from '@shared/domain/value-objects/state.vo';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { ProductUpdateUseCase } from '@product/application/usecases/product-update.usecase';

@injectable()
export class ProductUpdateController {
	constructor(
		@inject(containerTypes.productUpdateUseCase)
		private readonly _productUpdateUseCase: ProductUpdateUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, state } = req.body;
		try {
			const product = this._productUpdateUseCase.execute(
				new UuidVO(id),
				new NameVO(name),
				new DescriptionVO(description),
				new StateVO(state)
			);
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
