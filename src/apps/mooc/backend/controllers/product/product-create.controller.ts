import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { ICommandBus } from '../../../../../Contexts/shared/domain/interface/command-bust';
import { ProductCreateCommand } from '../../../../../Contexts/product/domain/command/product-create.command';

@injectable()
export class ProductCreateController {
	constructor(
		@inject(CONTAINER_TYPES.commandBus)
		private _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, categoryId, price, quantity, state } =
			req.body;
		try {
			const command = new ProductCreateCommand(
				id,
				name,
				description,
				categoryId,
				price,
				quantity,
				state,
				new Date() // createdAt
			);
			const product = this._commandBus.dispatch(command);
			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
