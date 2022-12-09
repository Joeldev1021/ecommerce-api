import { ValueObject } from "../../../shared/domain/value-objects/value-object";
import { isEmail } from "class-validator";
import { VOFormatException } from "../../../shared/domain/errors/vo-format.exception";

export class EmailVO extends ValueObject<string> {
  public equals(valueObject: EmailVO): boolean {
    return valueObject.value == this.value;
  }

  protected assertIsValid(value: string): void {
    if (!isEmail(value)) throw new VOFormatException(EmailVO.name, value);
  }
}
