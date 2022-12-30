import { NextFunction, Response } from 'express';
import { UserRegisterUseCase } from '@user/application/usecase/user-register.usecase';
import { PasswordVO } from '@user/domain/value-objects/password.vo';
import { UserRegisterDTO } from '@user/infrastructure/dtos/user-register.dto';
import { AuthRequest } from '@user/infrastructure/interface';
import { inject, injectable } from 'tsyringe';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { NameVO } from '@shared/domain/value-objects/name.vo';
import { EmailVO } from '@user/domain/value-objects/email.vo';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class UserRegisterController {
	constructor(
		@inject(containerTypes.userRegisterUseCase)
		private readonly _userRegisterUseCase: UserRegisterUseCase
	) {}

	async execute(
		req: AuthRequest<UserRegisterDTO>,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, email, password } = req.body;
		try {
			const user = await this._userRegisterUseCase.execute(
				new UuidVO(id),
				new NameVO(name),
				new EmailVO(email),
				new PasswordVO(password)
			);
			res.status(200).send(user);
		} catch (error) {
			next(error);
		}
	}
}
