import bcrypt from 'bcrypt';
import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from './value-object';

export class PasswordVO extends ValueObject<string> {
	public equals(valueObject: PasswordVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: string): void {
		if (value.length < 4) throw new VOFormatException(PasswordVO.name, value);
	}

	static async create(password: string): Promise<PasswordVO> {
		const hash = await bcrypt.hash(password, 10);
		return new PasswordVO(hash);
	}
}
