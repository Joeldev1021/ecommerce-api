import { ValueObject } from "./value-object";
import { VOFormatException } from "../errors/vo-format.exception";

export class DescriptionVO extends ValueObject<string> {
    public equals(valueObject: ValueObject<string>): boolean {
        return valueObject.value == this.value
    }

    protected assertIsValid(value: string): void {
        if (value.length > 10) throw new VOFormatException(DescriptionVO.name, value)

    }
}