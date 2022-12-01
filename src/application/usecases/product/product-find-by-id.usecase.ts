import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import productRepository from "../../../infrastruture/repositories/product.repository";

class ProductFindByIdUseCase {
  async execute(id: UuidVO) {
    return productRepository.findById(id);
  }
}

export default new ProductFindByIdUseCase();
