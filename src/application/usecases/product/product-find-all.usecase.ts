import productRepository from "../../../infrastruture/repositories/product.repository";

class ProductFindAllUseCase {
  async execute() {
    return productRepository.findAll();
  }
}

export default new ProductFindAllUseCase();
