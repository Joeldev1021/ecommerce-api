import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { PasswordMother } from '../../shared/domain/password.mother';

export class UserPasswordMother {
	static create(value: string): PasswordVO {
		return new PasswordVO(value);
	}

	static hash(value: string): PasswordVO {
		return PasswordVO.create(value);
	}

	static random(): PasswordVO {
		return this.create(PasswordMother.random());
	}
}
