import { UserRegisterCommand } from './../../../../src/Contexts/user/domain/command/user-register-command';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { UserEmailMother } from './user-email.mother';
import { UserIdMother } from './user-id.mother';
import { UserNameMother } from './user-name.mother';
import { UserPasswordMother } from './user-password.mother';
import { UserStateMother } from './user-state.mother';
import {
	UserModel,
} from '../../../../src/Contexts/user/domain/models/user.model';
import { UsernameVO } from '../../../../src/Contexts/user/domain/value-objects/username.vo';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { UserRoleVO } from '../../../../src/Contexts/user/domain/value-objects/user-role.vo';
import { UserRoleMother } from './user-role.mother';

export class UserModelMother {

	static create(
		id: UuidVO,
		username: UsernameVO,
		email: EmailVO,
		password: PasswordVO,
		state: StateVO,
		role: UserRoleVO
	): UserModel {
		return new UserModel(id, username, email, password, state, role);
	}

	static from(command: UserRegisterCommand): UserModel {
		return this.create(
			UserIdMother.create(command.id),
			UserNameMother.create(command.name),
			UserEmailMother.create(command.email),
			UserPasswordMother.create(command.password),
			UserStateMother.create(command.state),
			UserRoleMother.create(command.role ? command.role : 'admin')
		);
	}


	static random(): UserModel {
		return this.create(
			UserIdMother.random(),
			UserNameMother.random(),
			UserEmailMother.random(),
			UserPasswordMother.random(),
			UserStateMother.random(),
			UserRoleMother.random()
		);
	}
}
