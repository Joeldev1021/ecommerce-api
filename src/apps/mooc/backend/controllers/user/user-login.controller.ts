import { inject, injectable } from 'inversify';
import { NextFunction, Request, Response } from 'express';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { UserLoginUseCase } from '../../../../../Contexts/user/application/usecase/user-login.usecase';
import { UserLoginDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-login.dto';

@injectable()
export class UserLoginController {
	constructor(
		@inject(CONTAINER_TYPES.userLoginUseCase)
		private readonly _userLoginUseCase: UserLoginUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const user: UserLoginDTO = req.body;
		try {
			const userLogin = await this._userLoginUseCase.execute(
				user.email,
				user.password
			);
			res.status(200).send(userLogin);
		} catch (error) {
			next(error);
		}
	}
}
