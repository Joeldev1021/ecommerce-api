import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from './value-object';
import uuid from 'uuid-random';

export class UuidVO extends ValueObject<string> {
	public equals(valueObject: UuidVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: string): void {
		if (!uuid.test(value)) throw new VOFormatException(UuidVO.name, value);
	}
}
