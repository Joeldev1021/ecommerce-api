import { ValueObject } from './value-object';
import { VOFormatException } from '../errors/vo-format.exception';

export class DescriptionVO extends ValueObject<string> {
	public equals(valueObject: DescriptionVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: string): void {
		if (!(value.length > 10))
			throw new VOFormatException(DescriptionVO.name, value);
	}
}
