import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import categoryRepository from "../../infrastructure/repositories/category.repository";

class CategoryFindByIdUseCase {
  async execute(id: UuidVO) {
    return categoryRepository.findById(id);
  }
}

export default new CategoryFindByIdUseCase();
