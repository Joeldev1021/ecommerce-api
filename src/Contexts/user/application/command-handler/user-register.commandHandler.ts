import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { UserRegisterCommand } from '../../domain/command/user-register-command';
import { UserRegisterUseCase } from '../usecase/user-register.usecase';

@injectable()
export class UserRegisterCommandHandler implements ICommandHandler<Command> {
	constructor(
		@inject(CONTAINER_TYPES.userRegisterUseCase)
		private _userRegisterUseCase: UserRegisterUseCase
	) {}

	subscribeTo(): Command {
		return UserRegisterCommand;
	}

	async handle(command: UserRegisterCommand): Promise<void> {
		console.log('command handler');
		//await this._userRegisterUseCase.execute();
	}
}
