import { CategoryModel } from "../../domain/models/category.model";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import categoryRepository from "../../infrastructure/repositories/category.repository";
import { CategoryIdAlreadyInUseException } from "../error/category-id-already-in-use.exception";
import { CategoryNameAlreadyInUseException } from "../error/category-name-already-exists.exception";

class CategoryCreateUseCase {
  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    state: StateVO
  ) {
    const categoryExists = await categoryRepository.findById(id);
    if (categoryExists) throw new CategoryIdAlreadyInUseException();
    const categoryName = await categoryRepository.findByName(name);
    if (categoryName) throw new CategoryNameAlreadyInUseException();

    return categoryRepository.create(
      new CategoryModel(id, name, description, state)
    );
  }
}

export default new CategoryCreateUseCase();
