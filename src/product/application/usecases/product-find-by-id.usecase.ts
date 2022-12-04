import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import productRepository from "../../infrastructure/repositories/product.repository";

class ProductFindByIdUseCase {
  async execute(id: UuidVO) {
    return productRepository.findById(id);
  }
}

export default new ProductFindByIdUseCase();
