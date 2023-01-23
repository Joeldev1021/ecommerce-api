import { ProductDeleteCommand } from './../../../../../Contexts/product/domain/command/product-delete-command';
import { ICommandBus } from './../../../../../Contexts/shared/domain/interface/command-bust';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class ProductDeleteController {
	constructor(
		@inject(CONTAINER_TYPES.eventBus)
		private readonly _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const productId = req.params.id;
		try {
			const command = new ProductDeleteCommand(productId);
			const product = await this._commandBus.dispatch(command);

			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
