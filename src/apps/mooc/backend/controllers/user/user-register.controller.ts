import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { UserRegisterUseCase } from '../../../../../Contexts/user/application/usecase/user-register.usecase';
import { UserRegisterDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-register.dto';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class UserRegisterController {
	constructor(
		@inject(CONTAINER_TYPES.userRegisterUseCase)
		private readonly _userRegisterUseCase: UserRegisterUseCase
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

			const user = await this._userRegisterUseCase.execute(
				id,
				username,
				email,
				password,
				true, //state
				role
			);
			res.status(200).send(user);
		} catch (error) {
			next(error);
		}
	}
}
