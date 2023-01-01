import { NextFunction, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { NameVO } from '../../../../../Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../../Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { UserRegisterUseCase } from '../../../../../Contexts/user/application/usecase/user-register.usecase';
import { EmailVO } from '../../../../../Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../../Contexts/user/domain/value-objects/password.vo';
import { UserRegisterDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-register.dto';
import { AuthRequest } from '../../../../../Contexts/user/infrastructure/interface';
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
				new PasswordVO(password),
				new StateVO(true)
			);
			res.status(200).send(user);
		} catch (error) {
			next(error);
		}
	}
}
