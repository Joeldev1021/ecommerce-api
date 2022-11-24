import { VOFormatException } from "../errors/vo-format.exception";
import { ValueObject } from "./value-object";
import uuid from 'uuid'

export class UuidVO extends ValueObject<string> {
    public equals(valueObject: ValueObject<string>): boolean {
        return valueObject.value == this.value
    }

    protected assertIsValid(value: string): void {
        if (!uuid.validate(value)) throw new VOFormatException(UuidVO.name, value)
    }
}