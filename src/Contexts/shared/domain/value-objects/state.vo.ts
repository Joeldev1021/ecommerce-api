import { VOFormatException } from '../errors/vo-format.exception';
import { ValueObject } from './value-object';

export class StateVO extends ValueObject<boolean> {
	public equals(valueObject: StateVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: boolean): void {
		if (typeof value !== 'boolean')
			throw new VOFormatException(StateVO.name, value);
	}
}
