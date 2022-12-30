import { AuthRequest } from '@user/infrastructure/interface';
import { UserLoginDTO } from '@user/infrastructure/dtos/user-login.dto';
import { inject, injectable } from 'tsyringe';
import { NextFunction, Response } from 'express';
import { UserLoginUseCase } from '@user/application/usecase/user-login.usecase';
import { EmailVO } from '@user/domain/value-objects/email.vo';
import { PasswordVO } from '@user/domain/value-objects/password.vo';
import { containerTypes } from '../../dependency-injection/container.types';

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
