import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";

export class CategoryModel {
  constructor(
    public readonly id: UuidVO,
    public name: NameVO,
    public description: DescriptionVO,
    //public image: string,
    public state: StateVO
  ) {}
}
