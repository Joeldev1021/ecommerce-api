import 'reflect-metadata';
import { UserIdAlreadyInUseException } from '../errors/user-id-already-in-use.exception';
import { UserEmailAlreadyInUseException } from '../errors/user-email-already-in-use.exception';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { inject, injectable } from 'inversify';
import { UserModel } from '../../domain/models/user.model';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { UsernameVO } from '../../domain/value-objects/username.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UserRoleVO } from '../../domain/value-objects/user-role.vo';

@injectable()
export class UserRegisterUseCase {
	constructor(
		@inject(CONTAINER_TYPES.userRepository)
		private readonly _userRepository: IUserRepository
	) {}

	async execute(
		id: UuidVO,
		username: UsernameVO,
		email: EmailVO,
		password: PasswordVO,
		state: StateVO,
		role: UserRoleVO
	): Promise<void> {
		const userFound = await this._userRepository.findById(id);
		if (userFound) throw new UserIdAlreadyInUseException();

		const userFoundEmail = await this._userRepository.findByEmail(email);

		if (userFoundEmail) throw new UserEmailAlreadyInUseException();

		await this._userRepository.register(
			new UserModel(id, username, email, password, state, role)
		);
	}
}
