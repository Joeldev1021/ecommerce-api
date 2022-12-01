import { ProductInterface } from "../../infrastruture/types/product.interface";
import { ProductModel } from "../models/product.model";
import { NameVO } from "../value-objects/name.vo";
import { UuidVO } from "../value-objects/uuid.vo";

export interface IProductRepository {
  toPersistance(productDomain: ProductModel): ProductInterface;

  toDomain(product: ProductInterface): ProductModel;

  findById(id: UuidVO): Promise<ProductModel | null>;

  create(product: ProductModel): Promise<ProductModel | null>;

  findByName(name: NameVO): Promise<ProductModel | null>;

  delete(productId: UuidVO): Promise<number | null>;

  findAll(): Promise<ProductModel[] | null>;

  update(product: ProductModel): Promise<ProductModel | null>;
}
