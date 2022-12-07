import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { PriceVO } from "../../domain/value-objects/price.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { ProductIdAlreadyInUseException } from "../errors/product-id-already.in-use.exception";
import { ProductModel } from "../../domain/models/product.model";
import { CreatedAtVO } from "../../../shared/domain/value-objects/created-at.vo";
import { QuantityVO } from "../../domain/value-objects/quantity.vo";
import { ProductNameAlreadyInUseException } from "../errors/product-name-already-in-use.exception";
import { IProductRepository } from "../../domain/repositories/product.repository";
import { ProductRepository } from "../../infrastructure/repositories/product.repository";

export class ProductCreateUseCase {
  private _productRepository: IProductRepository;
  constructor(dependencies: { productRepository: ProductRepository }) {
    this._productRepository = dependencies.productRepository;
  }

  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    // image: string,
    productId: UuidVO,
    price: PriceVO,
    quantity: QuantityVO,
    state: StateVO
  ) {
    const productExists = await this._productRepository.findById(id);
    if (productExists) throw new ProductIdAlreadyInUseException();
    const productName = await this._productRepository.findByName(name);
    if (productName) throw new ProductNameAlreadyInUseException();

    return this._productRepository.create(
      new ProductModel(
        id,
        name,
        description,
        null,
        productId,
        price,
        quantity,
        state,
        new CreatedAtVO(new Date())
      )
    );
  }
}
