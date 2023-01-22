import { UserRoleVO } from './../../domain/value-objects/user-role.vo';
import { UsernameVO } from './../../domain/value-objects/username.vo';
import { UuidVO } from './../../../shared/domain/value-objects/uuid.vo';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { UserRegisterCommand } from '../../domain/command/user-register-command';
import { UserRegisterUseCase } from './user-register.usecase';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { ROLES_USER } from '../../../shared/infrastruture/utils/roles';

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
		await this._userRegisterUseCase.execute(
			new UuidVO(command.id),
			new UsernameVO(command.name),
			new EmailVO(command.email),
			PasswordVO.create(command.password),
			new StateVO(command.state),

			command.role
				? new UserRoleVO(command.role)
				: new UserRoleVO(ROLES_USER.USER)
		);
	}
}
