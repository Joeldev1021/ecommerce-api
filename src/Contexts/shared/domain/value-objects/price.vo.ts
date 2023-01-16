import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from './value-object';

export class PriceVO extends ValueObject<number> {
	public equals(valueObject: PriceVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: number): void {
		if (!(Number(value) === value))
			throw new VOFormatException(PriceVO.name, `${value}`);
	}
}
