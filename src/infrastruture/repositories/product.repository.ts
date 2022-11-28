import { ProductModel } from "../../domain/models/product.model";
import { IProductRepository } from "../../domain/repositories/product.repository";
import { CreatedAtVO } from "../../domain/value-objects/created-at.vo";
import { DescriptionVO } from "../../domain/value-objects/description.vo";
import { NameVO } from "../../domain/value-objects/name.vo";
import { PriceVO } from "../../domain/value-objects/price.vo";
import { QuantityVO } from "../../domain/value-objects/quantity.vo";
import { StateVO } from "../../domain/value-objects/state.vo";
import { UuidVO } from "../../domain/value-objects/uuid.vo";
import { Product } from "../models/product";
import { IProduct } from "../types/models/product.model";

class ProductRepository implements IProductRepository {
  toPersistance(productDomain: ProductModel): ProductInterface {
    const { id, name, description, price, quantity, state, createdAt } =
      productDomain;
    return {
      id: id.value,
      name: name.value,
      description: description.value,
      price: price.value,
      quantity: quantity.value,
      state: state.value,
      createdAt: createdAt.value,
    };
  }

  toDomain(productPersistance: IProduct): ProductModel {
    return new ProductModel(
      new UuidVO(productPersistance.id),
      new NameVO(productPersistance.name),
      new DescriptionVO(productPersistance.description),
      new PriceVO(productPersistance.price),
      new QuantityVO(productPersistance.quantity),
      new StateVO(productPersistance.state),
      new CreatedAtVO(productPersistance.createdAt)
    );
  }

  async findById(id: UuidVO): Promise<ProductModel | null> {
    const product = await Product.findByPk(id.value);
    if (!product) return null;
    return this.toDomain(product);
  }

  async findByName(name: NameVO): Promise<ProductModel | null> {
    const product = await Product.findByPk(name.value);
    if (!product) return null;
    return this.toDomain(product);
  }

  async create(product: ProductModel): Promise<ProductModel | null> {
    const productCreated = await Product.create(this.toPersistance(product));
    if (!productCreated) return null;
    return this.toDomain(productCreated);
  }
}

export default new ProductRepository();
