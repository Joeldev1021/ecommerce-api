import { AggregateRoot } from "../../../shared/domain/aggregate-root";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryCreatedEvent } from "../events/category-created.event";

export class CategoryModel extends AggregateRoot {
  constructor(
    public readonly id: UuidVO,
    public name: NameVO,
    public description: DescriptionVO,
    //public image: string,
    public state: StateVO
  ) {
    super();
  }

  static create(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    //public image: string,
    state: StateVO
  ): CategoryModel {
    const category = new CategoryModel(id, name, description, state);

    category.record(
      new CategoryCreatedEvent({
        aggregateId: id.value,
        categoryId: id.value,
      })
    );

    return category;
  }
}
