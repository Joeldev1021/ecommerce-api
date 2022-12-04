import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { PriceVO } from "../../domain/value-objects/price.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { ProductIdAlreadyInUseException } from "../errors/product-id-already.in-use.exception";
import productRepository from "../../infrastructure/repositories/product.repository";
import { ProductModel } from "../../domain/models/product.model";
import { CreatedAtVO } from "../../../shared/domain/value-objects/created-at.vo";
import { QuantityVO } from "../../domain/value-objects/quantity.vo";
import { ProductNameAlreadyInUseException } from "../errors/product-name-already-in-use.exception";

class ProductCreateUseCase {
  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    // image: string,
    categoryId: UuidVO,
    price: PriceVO,
    quantity: QuantityVO,
    state: StateVO
  ) {
    const productExists = await productRepository.findById(id);
    if (productExists) throw new ProductIdAlreadyInUseException();
    const productName = await productRepository.findByName(name);
    if (productName) throw new ProductNameAlreadyInUseException();

    return productRepository.create(
      new ProductModel(
        id,
        name,
        description,
        null,
        categoryId,
        price,
        quantity,
        state,
        new CreatedAtVO(new Date())
      )
    );
  }
}

export default new ProductCreateUseCase();
