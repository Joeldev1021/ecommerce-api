import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import categoryRepository from "../../../infrastruture/repositories/category.repository";

class CategoryFindByIdUseCase {
  async execute(id: UuidVO) {
    return categoryRepository.findById(id);
  }
}

export default new CategoryFindByIdUseCase();
