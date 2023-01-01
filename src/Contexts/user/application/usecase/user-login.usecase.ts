import { PasswordVO } from '../../domain/value-objects/password.vo';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { inject, injectable } from 'tsyringe';
import { UserNotFoundException } from '../errors/user-not-found.exception';
import { containerTypes } from '../../../../apps/mooc/backend/dependency-injection/container.types';

@injectable()
export class UserLoginUseCase {
	constructor(
		@inject(containerTypes.userRepository)
		private readonly _userRepository: IUserRepository
	) {}

	async execute(email: EmailVO, password: PasswordVO): Promise<void> {
		const userFound = await this._userRepository.findByEmail(email);

		if (!userFound) throw new UserNotFoundException();
	}
}
