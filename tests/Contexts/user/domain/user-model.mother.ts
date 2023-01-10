import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { UserModel } from '../../../../src/Contexts/user/domain/models/user.model';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { UserInterface } from '../../../../src/Contexts/user/infrastructure/types/user.interface';
import { UserEmailMother } from './user-email.mother';
import { UserIdMother } from './user-id.mother';
import { UserNameMother } from './user-name.mother';
import { UserPasswordMother } from './user-password.mother';
import { UserStateMother } from './user-state.mother';

export class UserModelMother {
	static create(
		id: UuidVO,
		name: NameVO,
		email: EmailVO,
		password: PasswordVO,
		state: StateVO
	): UserModel {
		return new UserModel(id, name, email, password, state);
	}

	static fromRequest(request: UserInterface): UserModel {
		return this.create(
			new UuidVO(request.user_id),
			new NameVO(request.name),
			new EmailVO(request.email),
			new PasswordVO(request.password),
			new StateVO(request.state)
		);
	}

	static random(): UserModel {
		return this.create(
			UserIdMother.random(),
			UserNameMother.random(),
			UserEmailMother.random(),
			UserPasswordMother.random(),
			UserStateMother.random()
		);
	}
}
