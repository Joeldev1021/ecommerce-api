import { InvalidLoginException } from './../errors/invalid-login.exception';
import { UserNotFoundException } from './../errors/user-not-found.exception';
import { IUserRepository } from './../../domain/repositories/user.repository';
import { JwtService } from './../../../shared/infrastruture/services/jwt.service';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Query } from '../../../shared/domain/query';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { IQueryHandler } from './../../../shared/domain/interface/query-handler';
import { UserLoginQuery } from './user-login.query';
import { UserLoginReponse } from './user-login.response';

@injectable()
export class UserLoginQueryHandler
	implements IQueryHandler<UserLoginQuery, UserLoginReponse>
{
	constructor(
		@inject(CONTAINER_TYPES.userRepository)
		private _userRepository: IUserRepository,
		@inject(CONTAINER_TYPES.jwtService)
		private _jwtService: JwtService
	) {}

	subscribeTo(): Query {
		return UserLoginQuery;
	}

	async handle(query: UserLoginQuery): Promise<UserLoginReponse> {
		const userFound = await this._userRepository.findByEmail(
			new EmailVO(query.email)
		);
		if (!userFound) throw new UserNotFoundException();

		const isPasswordValid = await userFound.password.compare(
			new PasswordVO(query.password)
		);

		if (!isPasswordValid) throw new InvalidLoginException();

		const token = await this._jwtService.signToken(
			{ id: userFound.id.value },
			{ expiresIn: '1d' }
		);

		return new UserLoginReponse(token);
	}
}
