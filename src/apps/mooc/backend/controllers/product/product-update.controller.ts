import { ProductUpdateCommand } from './../../../../../Contexts/product/domain/command/product-update-command';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { ICommandBus } from './../../../../../Contexts/shared/domain/interface/command-bust';

@injectable()
export class ProductUpdateController {
	constructor(
		@inject(CONTAINER_TYPES.commandBus)
		private readonly _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, state, price, quantity, categoryId } =
			req.body;
		try {
			const command = new ProductUpdateCommand(
				id,
				name,
				description,
				categoryId,
				price,
				quantity,
				state
			);
			const product = this._commandBus.dispatch(command);
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
