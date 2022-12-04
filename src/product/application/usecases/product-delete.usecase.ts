import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import productRepository from "../../infrastructure/repositories/product.repository";

class ProductDeleteUseCase {
  async execute(id: UuidVO) {
    return productRepository.delete(id);
  }
}

export default new ProductDeleteUseCase();
