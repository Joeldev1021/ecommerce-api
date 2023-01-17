import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UserNotFoundException } from '../errors/user-not-found.exception';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { InvalidLoginException } from '../errors/invalid-login.exception';
import { JwtService } from '../../../shared/infrastruture/services/jwt.service';

@injectable()
export class UserLoginUseCase {
	constructor(
		@inject(CONTAINER_TYPES.userRepository)
		private readonly _userRepository: IUserRepository,
		@inject(CONTAINER_TYPES.jwtService)
		private readonly _jwtService: JwtService
	) {}

	async execute(email: string, password: string): Promise<{ token: string }> {
		console.log(this._jwtService);
		const userEmail = new EmailVO(email);
		const userPassword = new PasswordVO(password);

		const userFound = await this._userRepository.findByEmail(userEmail);

		if (!userFound) throw new UserNotFoundException();

		const isPasswordValid = await userFound.password.compare(userPassword);

		if (!isPasswordValid) throw new InvalidLoginException();

		const token = await this._jwtService.signToken(
			{ id: userFound.id.value },
			{ expiresIn: '1d' }
		);

		return { token };
	}
}
