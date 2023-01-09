import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { CategoryCreateUseCase } from '../../../../../Contexts/category/application/usecase/category-create.usecase';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { NameVO } from '../../../../../Contexts/shared/domain/value-objects/name.vo';
import { DescriptionVO } from '../../../../../Contexts/shared/domain/value-objects/description.vo';
import { StateVO } from '../../../../../Contexts/shared/domain/value-objects/state.vo';
import { ICommandBus } from '../../../../../Contexts/shared/domain/interface/command-bust';
import { CategoryCreateCommand } from '../../../../../Contexts/category/domain/command/category-created.command';

@injectable()
export class CategoryCreateController {
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
				new CategoryCreateCommand(id, name, description, state)
			);

			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
