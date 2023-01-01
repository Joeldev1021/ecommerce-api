import { inject, injectable } from 'tsyringe';
import { NextFunction, Response } from 'express';
import { containerTypes } from '../../dependency-injection/container.types';
import { UserLoginUseCase } from '../../../../../Contexts/user/application/usecase/user-login.usecase';
import { UserLoginDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-login.dto';
import { AuthRequest } from '../../../../../Contexts/user/infrastructure/interface';
import { EmailVO } from '../../../../../Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../../Contexts/user/domain/value-objects/password.vo';

@injectable()
export class UserLoginController {
	constructor(
		@inject(containerTypes.userLoginUseCase)
		private readonly _userLoginUseCase: UserLoginUseCase
	) {}

	async execute(
		req: AuthRequest<UserLoginDTO>,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { email, password } = req.body;
		try {
			const user = await this._userLoginUseCase.execute(
				new EmailVO(email),
				new PasswordVO(password)
			);
			res.status(200).send(user);
		} catch (error) {
			next(error);
		}
	}
}
