import { ProductModel } from '../models/product.model';
import { ProductId } from '../value-objects/product-id.vo';
import { ProductName } from '../value-objects/product-name.vo';

export interface IProductRepository {
	findById(id: ProductId): Promise<ProductModel | null>;

	create(product: ProductModel): Promise<ProductModel | null>;

	findByName(name: ProductName): Promise<ProductModel | null>;

	delete(productId: ProductId): Promise<void>;

	findAll(): Promise<ProductModel[] | null>;

	update(product: ProductModel): Promise<ProductModel | null>;
}
