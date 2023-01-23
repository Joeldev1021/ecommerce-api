import { UserLoginQuery } from './../../../../../src/Contexts/user/application/login/user-login.query';
import { EmailVO } from '../../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../../src/Contexts/user/domain/value-objects/password.vo';

export class UserLoginQueryMother {
	static create(email: EmailVO, password: PasswordVO): UserLoginQuery {
		return {
			email: email.value,
			password: password.value,
		};
	}

	static fromPrimitives(email: string, password: string): UserLoginQuery {
		return {
			email,
			password,
		};
	}
}
