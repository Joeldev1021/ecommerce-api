import { PasswordVO } from '../value-objects/password.vo';
import { EmailVO } from '../value-objects/email.vo';
import { UsernameVO } from '../value-objects/username.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';
import { UserRoleVO } from '../value-objects/user-role.vo';
export interface IUserPrimitives extends AggregateRootPrimitives {
	userId: string;
	username: string;
	email: string;
	password: string;
	avatar?: string;
	state: boolean;
	role: string;
}

export class UserModel extends AggregateRoot {
	constructor(
		public readonly id: UuidVO,
		public username: UsernameVO,
		public email: EmailVO,
		public password: PasswordVO,
		public state: StateVO,
		public role: UserRoleVO
	) {
		super();
	}

	static toDomain(user: IUserPrimitives): UserModel {
		return new UserModel(
			new UuidVO(user.userId),
			new UsernameVO(user.username),
			new EmailVO(user.email),
			new PasswordVO(user.password),
			new StateVO(user.state),
			new UserRoleVO(user.role)
		);
	}

	toPrimitives(): IUserPrimitives {
		return {
			userId: this.id.value,
			username: this.username.value,
			email: this.email.value,
			password: this.password.value,
			state: this.state.value,
			role: this.role.value,
		};
	}
}
