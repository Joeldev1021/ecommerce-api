import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import productRepository from "../../../infrastruture/repositories/product.repository";

class ProductDeleteUseCase {
  async execute(id: UuidVO) {
    return productRepository.delete(id);
  }
}

export default new ProductDeleteUseCase();
