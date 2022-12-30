import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { IProductRepository } from "../../domain/repositories/product.repository";
import { ProductRepository } from "../../infrastructure/repositories/product.repository";

@injectable()
export class ProductFindAllUseCase {
  constructor(
    @inject(containerTypes.productRepository)
    private _productRepository: IProductRepository
  ) {}
  async execute() {
    return this._productRepository.findAll();
  }
}
