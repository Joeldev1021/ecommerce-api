import { inject } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { IProductRepository } from "../../domain/repositories/product.repository";
import { ProductRepository } from "../../infrastructure/repositories/product.repository";

export class ProductDeleteUseCase {
  constructor(
    @inject(containerTypes.productRepository)
    private _productRepository: IProductRepository
  ) {}

  async execute(id: UuidVO) {
    return this._productRepository.delete(id);
  }
}
