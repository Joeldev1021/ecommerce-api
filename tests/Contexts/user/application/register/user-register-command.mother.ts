import { UserRegisterCommand } from './../../../../../src/Contexts/user/domain/command/user-register-command';
import { UserRoleMother } from './../../domain/user-role.mother';
import { UserStateMother } from './../../domain/user-state.mother';
import { UserPasswordMother } from './../../domain/user-password.mother';
import { UserEmailMother } from './../../domain/user-email.mother';
import { UserNameMother } from './../../domain/user-name.mother';
import { UserIdMother } from './../../domain/user-id.mother';
import { UserRoleVO } from './../../../../../src/Contexts/user/domain/value-objects/user-role.vo';
import { StateVO } from './../../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { PasswordVO } from './../../../../../src/Contexts/user/domain/value-objects/password.vo';
import { EmailVO } from './../../../../../src/Contexts/user/domain/value-objects/email.vo';
import { UsernameVO } from './../../../../../src/Contexts/user/domain/value-objects/username.vo';
import { UuidVO } from './../../../../../src/Contexts/shared/domain/value-objects/uuid.vo';

export class UserRegisterCommandMother {
	static create(
		id: UuidVO,
		username: UsernameVO,
		email: EmailVO,
		password: PasswordVO,
		state: StateVO,
		role: UserRoleVO
	): UserRegisterCommand {
		return {
			id: id.value,
			name: username.value,
			email: email.value,
			password: password.value,
			state: state.value,
			role: role.value,
		};
	}

	static random(): UserRegisterCommand {
		return this.create(
			UserIdMother.random(),
			UserNameMother.random(),
			UserEmailMother.random(),
			UserPasswordMother.random(),
			UserStateMother.random(),
			UserRoleMother.random()
		);
	}

	/* static invalid(): UserRegisterCommand {
		return {
			id: UserIdMother.random().value,
			name: UserNameMother.random().value,
			email: UserEmailMother.random().value,
			password: UserPasswordMother.random().value,
			state: UserStateMother.random().value,
			role: UserRoleMother.random().value,
		};
	} */
}
