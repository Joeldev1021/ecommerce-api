import { UserLoginUseCase } from './user-login.usecase';
import { UserLoginCommand } from './../../domain/command/user-login.command';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';

@injectable()
export class UserLoginCommandHandler implements ICommandHandler<Command> {
	constructor(
		@inject(CONTAINER_TYPES.userLoginUseCase)
		private _userLoginUseCase: UserLoginUseCase
	) {}

	subscribeTo(): Command {
		return UserLoginCommand;
	}

	async handle(command: UserLoginCommand): Promise<void> {
		await this._userLoginUseCase.execute(
			new EmailVO(command.email),
			PasswordVO.create(command.password)
		);
	}
}
