import { ProductModel } from '../models/product.model';
import { UsernameVO } from '../../../shared/domain/value-objects/username.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';

export interface IProductRepository {
	findById(id: UuidVO): Promise<ProductModel | null>;

	create(product: ProductModel): Promise<ProductModel | null>;

	findByName(name: UsernameVO): Promise<ProductModel | null>;

	delete(productId: UuidVO): Promise<void>;

	findAll(): Promise<ProductModel[] | null>;

	update(product: ProductModel): Promise<ProductModel | null>;
}
