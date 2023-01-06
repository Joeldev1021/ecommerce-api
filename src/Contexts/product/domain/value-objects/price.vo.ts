import { VOFormatException } from "../../../shared/domain/errors/vo-format.exception";
import { ValueObject } from "../../../shared/domain/value-objects/value-object";

export class PriceVO extends ValueObject<number> {
  public equals(valueObject: PriceVO): boolean {
    return valueObject.value == this.value;
  }

  protected assertIsValid(value: number): void {
    if (!(Number(value) === value && value % 1 !== 0))
      throw new VOFormatException(PriceVO.name, `${value}`);
  }
}