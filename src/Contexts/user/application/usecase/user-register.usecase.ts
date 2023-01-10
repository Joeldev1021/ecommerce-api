import 'reflect-metadata';
import { UserIdAlreadyInUseException } from '../errors/user-id-already-in-use.exception';
import { UserEmailAlreadyInUseException } from '../errors/user-email-already-in-use.exception';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { inject, injectable } from 'inversify';
import { UserModel } from '../../..//user/domain/models/user.model';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';

@injectable()
export class UserRegisterUseCase {
	constructor(
		@inject(CONTAINER_TYPES.userRepository)
		private readonly _userRepository: IUserRepository
	) {}

	async execute(
		id: string,
		name: string,
		email: string,
		password: string,
		state: boolean
	): Promise<void> {
		const userId = new UuidVO(id);
		const userFound = await this._userRepository.findById(userId);
		if (userFound != null) throw new UserIdAlreadyInUseException();

		const userEmail = new EmailVO(email);
		const userFoundEmail = await this._userRepository.findByEmail(userEmail);
		if (userFoundEmail != null) throw new UserEmailAlreadyInUseException();
		//const passwordHash = await PasswordVO.create(password.value);

		await this._userRepository.register(
			new UserModel(
				userId,
				new NameVO(name),
				userEmail,
				new PasswordVO(password),
				new StateVO(state)
			)
		);
	}
}
