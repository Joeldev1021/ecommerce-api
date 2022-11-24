import { ValueObject } from "./value-object";
import { VOFormatException } from "../errors/vo-format.exception";
import { isEmail } from "class-validator";

export class EmailVO extends ValueObject<string> {
    public equals(valueObject: ValueObject<string>): boolean {
        return valueObject.value == this.value
    }

    protected assertIsValid(value: string): void {
        if (isEmail(value)) throw new VOFormatException(EmailVO.name, value)
    }
}