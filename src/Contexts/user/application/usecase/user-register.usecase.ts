import { UserIdAlreadyInUseException } from '../errors/user-id-already-in-use.exception';
import { UserEmailAlreadyInUseException } from '../errors/user-email-already-in-use.exception';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { UserModel } from '../../..//user/domain/models/user.model';
import { containerTypes } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';

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
		password: PasswordVO,
		state: StateVO
	): Promise<void> {
		const userFound = await this._userRepository.findById(id);
		if (userFound != null) throw new UserIdAlreadyInUseException();

		const userEmail = await this._userRepository.findByEmail(email);
		if (userEmail != null) throw new UserEmailAlreadyInUseException();
		//todo implements test with password hast
		//const passwordHash = await PasswordVO.create(password.value);

		await this._userRepository.register(
			new UserModel(id, name, email, password, state)
		);
	}
}
