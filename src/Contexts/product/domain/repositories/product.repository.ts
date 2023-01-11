import { ProductModel } from '../models/product.model';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';

export interface IProductRepository {
	findById(id: UuidVO): Promise<ProductModel | null>;

	create(product: ProductModel): Promise<ProductModel | null>;

	findByName(name: NameVO): Promise<ProductModel | null>;

	delete(productId: UuidVO): Promise<void>;

	findAll(): Promise<ProductModel[] | null>;

	update(product: ProductModel): Promise<ProductModel | null>;
}
