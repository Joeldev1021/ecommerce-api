import { ValueObject } from './value-object';
import { VOFormatException } from '../errors/vo-format.exception';
const NAME_REGEX = /^[a-zA-Z]*$/;

export class NameVO extends ValueObject<string> {
	public equals(valueObject: NameVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: string): void {
		if (value.length < 4 || !NAME_REGEX.test(value))
			throw new VOFormatException(NameVO.name, value);
	}
}
