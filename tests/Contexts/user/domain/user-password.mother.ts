import { PasswordVO } from '../../../../src/Contexts/shared/domain/value-objects/password.vo';
import { PasswordMother } from '../../shared/domain/password.mother';

export class UserPasswordMother {
	static create(value: string): PasswordVO {
		return new PasswordVO(value);
	}

	static async hash(value: string): Promise<PasswordVO> {
		return PasswordVO.create(value);
	}

	static random(): PasswordVO {
		return this.create(PasswordMother.random());
	}
}
