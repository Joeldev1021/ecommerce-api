import { CategoryModel } from "../../domain/models/category.model";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import categoryRepository from "../../infrastructure/repositories/category.repository";

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
