import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from './value-object';

export class QuantityVO extends ValueObject<number> {
	public equals(valueObject: QuantityVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: number): void {
		if (!(value % 1 === 0))
			throw new VOFormatException(QuantityVO.name, `${value}`);
	}
}
