import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { IUserPrimitives } from '../../../../src/Contexts/user/domain/models/user.model';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { UsernameVO } from '../../../../src/Contexts/user/domain/value-objects/username.vo';
import { UserEmailMother } from '../domain/user-email.mother';
import { UserIdMother } from '../domain/user-id.mother';
import { UserNameMother } from '../domain/user-name.mother';
import { UserPasswordMother } from '../domain/user-password.mother';
import { UserStateMother } from '../domain/user-state.mother';

export class UserRequestMother {
	static create(
		id: UuidVO,
		username: UsernameVO,
		email: EmailVO,
		password: PasswordVO,
		state: StateVO
	): IUserPrimitives {
		return {
			userId: id.value,
			username: username.value,
			email: email.value,
			password: password.value,
			state: state.value,
		};
	}

	static random(): IUserPrimitives {
		return this.create(
			UserIdMother.random(),
			UserNameMother.random(),
			UserEmailMother.random(),
			UserPasswordMother.random(),
			UserStateMother.random()
		);
	}
}
