import { CreatedAtVO } from "../../../shared/domain/value-objects/created-at.vo";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { PriceVO } from "../value-objects/price.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { QuantityVO } from "../value-objects/quantity.vo";

export class ProductModel {
  constructor(
    public readonly id: UuidVO,
    public name: NameVO,
    public description: DescriptionVO,
    public imageUrl: null,
    public categoryId: UuidVO,
    public price: PriceVO,
    public quantity: QuantityVO,
    public state: StateVO,
    public createdAt: CreatedAtVO
  ) {}
}
