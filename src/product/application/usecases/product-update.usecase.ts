import { CategoryModel } from "../../../category/domain/models/category.model";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { IProductRepository } from "../../domain/repositories/product.repository";
import { ProductRepository } from "../../infrastructure/repositories/product.repository";

export class ProductUpdateUseCase {
  private _productRepository: IProductRepository;
  constructor(dependencies: { productRepository: ProductRepository }) {
    this._productRepository = dependencies.productRepository;
  }
  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    state: StateVO
  ) {
    /* return productRepository.update(
      new productModel(id, name, description, state)
    ); */
  }
}
