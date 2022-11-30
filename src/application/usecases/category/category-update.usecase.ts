import { CategoryModel } from "../../../domain/models/category.model";
import { DescriptionVO } from "../../../domain/value-objects/description.vo";
import { NameVO } from "../../../domain/value-objects/name.vo";
import { StateVO } from "../../../domain/value-objects/state.vo";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import categoryRepository from "../../../infrastruture/repositories/category.repository";

class CategoryUpdateUseCase {
  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    state: StateVO
  ) {
    return categoryRepository.update(
      new CategoryModel(id, name, description, state)
    );
  }
}

export default new CategoryUpdateUseCase();
