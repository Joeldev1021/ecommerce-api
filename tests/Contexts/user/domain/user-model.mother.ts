import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { UserEmailMother } from './user-email.mother';
import { UserIdMother } from './user-id.mother';
import { UserNameMother } from './user-name.mother';
import { UserPasswordMother } from './user-password.mother';
import { UserStateMother } from './user-state.mother';
import {
	IUserPrimitives,
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

	static fromRequest(request: IUserPrimitives): UserModel {
		return this.create(
			new UuidVO(request.userId),
			new UsernameVO(request.username),
			new EmailVO(request.email),
			new PasswordVO(request.password),
			new StateVO(request.state),
			new UserRoleVO(request.role)
		);
	}

	static async random(): Promise<UserModel> {
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
