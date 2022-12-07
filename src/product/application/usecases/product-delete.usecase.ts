import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { IProductRepository } from "../../domain/repositories/product.repository";
import { ProductRepository } from "../../infrastructure/repositories/product.repository";

export class ProductDeleteUseCase {
  private _productRepository: IProductRepository;
  constructor(dependencies: { productRepository: ProductRepository }) {
    this._productRepository = dependencies.productRepository;
  }

  async execute(id: UuidVO) {
    return this._productRepository.delete(id);
  }
}
