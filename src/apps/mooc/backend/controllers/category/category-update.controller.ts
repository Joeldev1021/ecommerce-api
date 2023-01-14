import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { ICommandBus } from '../../../../../Contexts/shared/domain/interface/command-bust';
import { CategoryUpdateCommand } from '../../../../../Contexts/category/domain/command/category-update-command';

@injectable()
export class CategoryUpdateController {
	constructor(
		@inject(CONTAINER_TYPES.commandBus)
		private readonly _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, state } = req.body;
		try {
			const category = await this._commandBus.dispatch(
				new CategoryUpdateCommand(id, name, description, state)
			);
			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
