import productRepository from "../../infrastructure/repositories/product.repository";

class ProductFindAllUseCase {
  async execute() {
    return productRepository.findAll();
  }
}

export default new ProductFindAllUseCase();
