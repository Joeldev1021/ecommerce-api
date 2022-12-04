import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import categoryRepository from "../../infrastructure/repositories/category.repository";

class CategoryDeleteUseCase {
  async execute(id: UuidVO) {
    return categoryRepository.delete(id);
  }
}

export default new CategoryDeleteUseCase();
