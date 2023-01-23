import { ICommandBus } from './../../../../../Contexts/shared/domain/interface/command-bust';
import { UserRegisterCommand } from './../../../../../Contexts/user/domain/command/user-register-command';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { UserRegisterDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-register.dto';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class UserRegisterController {
	constructor(
		@inject(CONTAINER_TYPES.commandBus)
		private readonly _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, username, email, password, role, ...rest } =
			req.body as UserRegisterDTO;

		try {
			if (Object.keys(rest).length > 1) throw new Error('fields unecessary');

			const user = this._commandBus.dispatch(
				new UserRegisterCommand(id, username, email, password, true, role)
			);
			res.status(200).send(user);
		} catch (error) {
			next(error);
		}
	}
}
