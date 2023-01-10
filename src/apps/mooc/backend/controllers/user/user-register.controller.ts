import { NextFunction, Response } from 'express';
import { inject, injectable } from 'inversify';
import { NameVO } from '../../../../../Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../../Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { UserRegisterUseCase } from '../../../../../Contexts/user/application/usecase/user-register.usecase';
import { EmailVO } from '../../../../../Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../../Contexts/user/domain/value-objects/password.vo';
import { UserRegisterDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-register.dto';
import { AuthRequest } from '../../../../../Contexts/user/infrastructure/interface';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class UserRegisterController {
	constructor(
		@inject(CONTAINER_TYPES.userRegisterUseCase)
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
				id,
				name,
				email,
				password,
				true
			);
			res.status(200).send(user);
		} catch (error) {
			next(error);
		}
	}
}
