import { IProductRepository } from "../../domain/repositories/product.repository";
import { ProductRepository } from "../../infrastructure/repositories/product.repository";

export class ProductFindAllUseCase {
  private _productRepository: IProductRepository;
  constructor(dependencies: { productRepository: ProductRepository }) {
    this._productRepository = dependencies.productRepository;
  }
  async execute() {
    return this._productRepository.findAll();
  }
}
