import { CreatedAtVO } from "../value-objects/created-at.vo";
import { DescriptionVO } from "../value-objects/description.vo";
import { NameVO } from "../value-objects/name.vo";
import { PriceVO } from "../value-objects/price.vo";
import { QuantityVO } from "../value-objects/quantity.vo";
import { StateVO } from "../value-objects/state.vo";
import { UuidVO } from "../value-objects/uuid.vo";

export class ProductModel {
  constructor(
    public readonly id: UuidVO,
    public name: NameVO,
    public description: DescriptionVO,
    //public image: string,
    public price: PriceVO,
    public quantity: QuantityVO,
    public state: StateVO,
    public createdAt: CreatedAtVO
  ) {}
}
