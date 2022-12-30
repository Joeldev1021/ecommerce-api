import { UserIdAlreadyInUseException } from '../errors/user-id-already-in-use.exception';
import { UserEmailAlreadyInUseException } from '../errors/user-email-already-in-use.exception';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { inject, injectable } from 'tsyringe';
import { containerTypes } from '@apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { NameVO } from '@shared/domain/value-objects/name.vo';
import { PasswordVO } from '@user/domain/value-objects/password.vo';
import { StateVO } from '@shared/domain/value-objects/state.vo';
import { UserModel } from '@user/domain/models/user.model';

@injectable()
export class UserRegisterUseCase {
	constructor(
		@inject(containerTypes.userRepository)
		private readonly _userRepository: IUserRepository
	) {}

	async execute(
		id: UuidVO,
		name: NameVO,
		email: EmailVO,
		password: PasswordVO
	): Promise<UserModel | null> {
		const userFound = await this._userRepository.findById(id);
		if (userFound != null) throw new UserIdAlreadyInUseException();

		const userEmail = await this._userRepository.findByEmail(email);
		if (userEmail != null) throw new UserEmailAlreadyInUseException();

		const passwordHash = await PasswordVO.create(password.value);

		return await this._userRepository.create(
			new UserModel(id, name, email, passwordHash, new StateVO(true))
		);
	}
}
