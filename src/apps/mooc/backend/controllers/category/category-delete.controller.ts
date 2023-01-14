import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CategoryDeleteCommand } from '../../../../../Contexts/category/domain/command/category-delete-command';
import { ICommandBus } from '../../../../../Contexts/shared/domain/interface/command-bust';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class CategoryDeleteController {
	constructor(
		@inject(CONTAINER_TYPES.commandBus)
		private readonly _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const categoryId = req.params.id;
		try {
			const category = await this._commandBus.dispatch(
				new CategoryDeleteCommand(categoryId)
			);
			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
