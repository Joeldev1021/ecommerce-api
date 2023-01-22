import { UserLoginCommand } from './../../../../../Contexts/user/domain/command/user-login.command';
import { ICommandBus } from './../../../../../Contexts/shared/domain/interface/command-bust';
import { inject, injectable } from 'inversify';
import { NextFunction, Request, Response } from 'express';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { UserLoginUseCase } from '../../../../../Contexts/user/application/login/user-login.usecase';
import { UserLoginDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-login.dto';

@injectable()
export class UserLoginController {
	constructor(
		@inject(CONTAINER_TYPES.commandBus)
		private readonly _commandBus: ICommandBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const user: UserLoginDTO = req.body;
		try {
			const userLogin = await this._commandBus.dispatch(
				new UserLoginCommand(user.email, user.password)
			);
			res.status(200).send(userLogin);
		} catch (error) {
			next(error);
		}
	}
}
