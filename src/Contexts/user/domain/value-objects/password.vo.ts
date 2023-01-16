import bcrypt from 'bcrypt';
import { VOFormatException } from '../../../shared/domain/errors/vo-format.exception';
import { ValueObject } from '../../../shared/domain/value-objects/value-object';

export class PasswordVO extends ValueObject<string> {
	public equals(valueObject: PasswordVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: string): void {
		if (value.length < 4) throw new VOFormatException(PasswordVO.name, value);
	}

	static create(password: string): PasswordVO {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		return new PasswordVO(hash);
	}
}
