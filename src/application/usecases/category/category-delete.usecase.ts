import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import categoryRepository from "../../../infrastruture/repositories/category.repository";

class CategoryDeleteUseCase {
  async execute(id: UuidVO) {
    return categoryRepository.delete(id);
  }
}

export default new CategoryDeleteUseCase();
