import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ProductUpdateUseCase } from '../../../../../Contexts/product/application/usecases/product-update.usecase';
import { DescriptionVO } from '../../../../../Contexts/shared/domain/value-objects/description.vo';
import { NameVO } from '../../../../../Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../../Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';

import { CONTAINER_TYPE } from '../../dependency-injection/container.types';

@injectable()
export class ProductUpdateController {
	constructor(
		@inject(CONTAINER_TYPE.productUpdateUseCase)
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
