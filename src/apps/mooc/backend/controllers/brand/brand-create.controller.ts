import { BrandCreateCommand } from './../../../../../Contexts/brand/domain/command/brand-create.command';
import { Request, Response, NextFunction } from 'express';
import { ICommandBus } from './../../../../../Contexts/shared/domain/interface/command-bust';
import { CONTAINER_TYPES } from './../../dependency-injection/container.types';
import { inject, injectable } from 'inversify';

@injectable()
export class BrandCreateController {
	constructor(
		@inject(CONTAINER_TYPES.commandBus)
		private readonly _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { brandId, name, description, logo, slug, state } = req.body;
		try {
			const query = new BrandCreateCommand(
				brandId,
				name,
				description,
				logo,
				slug,
				state
			);
			const category = await this._commandBus.dispatch(query);

			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
