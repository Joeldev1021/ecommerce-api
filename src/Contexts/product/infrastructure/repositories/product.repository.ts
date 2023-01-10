import { injectable } from 'inversify';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { Product } from '../../../shared/infrastruture/models/product';
import { ProductModel } from '../../domain/models/product.model';
import { IProductRepository } from '../../domain/repositories/product.repository';

@injectable()
export class ProductRepository implements IProductRepository {
	async findById(id: UuidVO): Promise<ProductModel | null> {
		const product = await Product.findByPk(id.value);
		if (!product) return null;
		return ProductModel.toDomain(product);
	}

	async findByName(name: NameVO): Promise<ProductModel | null> {
		const product = await Product.findByPk(name.value);
		if (!product) return null;

		return ProductModel.toDomain(product);
	}

	async create(product: ProductModel): Promise<ProductModel | null> {
		const productCreated = await Product.create(product.toPrimitives());
		if (!productCreated) return null;

		return ProductModel.toDomain(productCreated);
	}

	async delete(productId: UuidVO): Promise<void> {
		await Product.destroy({
			where: { product_id: productId.value },
		});
	}

	async findAll(): Promise<ProductModel[] | null> {
		const products = await Product.findAll();
		if (!products) return null;
		return products.map(product => ProductModel.toDomain(product));
	}

	async update(product: ProductModel): Promise<ProductModel | null> {
		//todo => should return productModel updated
		return null;
	}
}
