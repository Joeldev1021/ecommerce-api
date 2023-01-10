import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { UserInterface } from '../../../../src/Contexts/user/infrastructure/types/user.interface';
import { UserEmailMother } from '../domain/user-email.mother';
import { UserIdMother } from '../domain/user-id.mother';
import { UserNameMother } from '../domain/user-name.mother';
import { UserPasswordMother } from '../domain/user-password.mother';
import { UserStateMother } from '../domain/user-state.mother';

export class UserRequestMother {
	static create(
		id: UuidVO,
		name: NameVO,
		email: EmailVO,
		password: PasswordVO,
		state: StateVO
	): UserInterface {
		return {
			user_id: id.value,
			name: name.value,
			email: email.value,
			password: password.value,
			state: state.value,
		};
	}

	static random(): UserInterface {
		return this.create(
			UserIdMother.random(),
			UserNameMother.random(),
			UserEmailMother.random(),
			UserPasswordMother.random(),
			UserStateMother.random()
		);
	}
}
