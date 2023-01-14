import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UserNotFoundException } from '../errors/user-not-found.exception';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';

@injectable()
export class UserLoginUseCase {
	constructor(
		@inject(CONTAINER_TYPES.userRepository)
		private readonly _userRepository: IUserRepository
	) {}

	async execute(email: string, password: string): Promise<void> {
		const userEmail = new EmailVO(email);
		const userPassword = new PasswordVO(password);
		console.log(userPassword);
		const userFound = await this._userRepository.findByEmail(userEmail);

		if (!userFound) throw new UserNotFoundException();
	}
}
