import { VOFormatException } from "../errors/vo-format.exception";
import { ValueObject } from "./value-object";
import uuid from 'uuid'

export class PasswordVO extends ValueObject<string> {
    public equals(valueObject: ValueObject<string>): boolean {
        return valueObject.value == this.value
    }

    protected assertIsValid(value: string): void {
        if (value.length > 4) throw new VOFormatException(PasswordVO.name, value)
    }
}