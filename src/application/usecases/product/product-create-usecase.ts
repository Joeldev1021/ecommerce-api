import { DescriptionVO } from "../../../domain/value-objects/description.vo";
import { NameVO } from "../../../domain/value-objects/name.vo";
import { PriceVO } from "../../../domain/value-objects/price.vo";
import { QuantityVO } from "../../../domain/value-objects/quantity.vo";
import { StateVO } from "../../../domain/value-objects/state.vo";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import { ProductIdAlreadyInUseException } from "../../errors/product-id-already.in-use.exception";
import productRepository from "../../../infrastruture/repositories/product.repository";
import { ProductNameAlreadyInUseException } from "../../errors/product-name-already-in-use.exception";
import { ProductModel } from "../../../domain/models/product.model";
import { CreatedAtVO } from "../../../domain/value-objects/created-at.vo";

class ProductCreateUseCase {
  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    // image: string,
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
        price,
        quantity,
        state,
        new CreatedAtVO(new Date())
      )
    );
  }
}

export default new ProductCreateUseCase();
