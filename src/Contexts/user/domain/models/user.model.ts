import { PasswordVO } from '../value-objects/password.vo';
import { EmailVO } from '../value-objects/email.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UserInterface } from '../../infrastructure/types/user.interface';

export class UserModel {
	constructor(
		public readonly id: UuidVO,
		public name: NameVO,
		public email: EmailVO,
		public password: PasswordVO,
		public state: StateVO
	) {}

	static toDomain(user: UserInterface): UserModel {
		return new UserModel(
			new UuidVO(user.user_id),
			new NameVO(user.name),
			new EmailVO(user.email),
			new PasswordVO(user.password),
			new StateVO(user.state)
		);
	}

	toPrimitives(): UserInterface {
		return {
			user_id: this.id.value,
			name: this.name.value,
			email: this.email.value,
			password: this.password.value,
			state: this.state.value,
		};
	}
}
