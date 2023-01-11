import { PasswordVO } from '../value-objects/password.vo';
import { EmailVO } from '../value-objects/email.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';
export interface IUserPrimitives extends AggregateRootPrimitives {
	user_id: string;
	name: string;
	email: string;
	password: string;
	avatar?: string;
	state: boolean;
}

export class UserModel extends AggregateRoot {
	constructor(
		public readonly id: UuidVO,
		public name: NameVO,
		public email: EmailVO,
		public password: PasswordVO,
		public state: StateVO
	) {
		super();
	}

	static toDomain(user: IUserPrimitives): UserModel {
		return new UserModel(
			new UuidVO(user.user_id),
			new NameVO(user.name),
			new EmailVO(user.email),
			new PasswordVO(user.password),
			new StateVO(user.state)
		);
	}

	toPrimitives(): IUserPrimitives {
		return {
			user_id: this.id.value,
			name: this.name.value,
			email: this.email.value,
			password: this.password.value,
			state: this.state.value,
		};
	}
}
