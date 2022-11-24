import { ValueObject } from "./value-object";
import { VOFormatException } from "../errors/vo-format.exception";

export class NameVO extends ValueObject<string> {
    public equals(valueObject: ValueObject<string>): boolean {
        return valueObject.value == this.value
    }

    protected assertIsValid(value: string): void {
        if (value.length > 4) throw new VOFormatException(NameVO.name, value)

    }
}