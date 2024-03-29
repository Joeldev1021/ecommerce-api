import { IProductRepository } from './../../domain/repositories/product.repository';
import { injectable } from 'inversify';
import { ObjectType } from 'typeorm';
import { ProductEntity } from '../../../shared/infrastruture/entity/product';
import { TypeOrmRepository } from '../../../shared/infrastruture/persistance/typeorm-repository';
import {
	IProductPrimitives,
	ProductModel,
} from '../../domain/models/product.model';
import { ProductId } from '../../domain/value-objects/product-id.vo';
import { ProductName } from '../../domain/value-objects/product-name.vo';

@injectable()
export class ProductRepository
	extends TypeOrmRepository<ProductModel, IProductPrimitives>
	implements IProductRepository
{
	entitySchema(): ObjectType<ProductModel> {
		return ProductEntity;
	}

	async findById(id: ProductId): Promise<ProductModel | null> {
		const repository = await this.repository();
		const product = await repository.findOneBy({ productId: id.value });
		if (!product) return null;
		return ProductModel.toDomain(product);
	}

	async findByName(name: ProductName): Promise<ProductModel | null> {
		const repository = await this.repository();
		const product = await repository.findOneBy({ name: name.value });
		if (!product) return null;

		return ProductModel.toDomain(product);
	}

	async create(productModel: ProductModel): Promise<ProductModel | null> {
		const product = new ProductEntity();
		product.productId = productModel.id.value;
		product.name = productModel.name.value;
		product.description = productModel.description.value;
		product.imageUrl = productModel.imageUrl || '';
		product.categoryId = productModel.categoryId.value;
		product.price = productModel.price.value;
		product.quantity = productModel.quantity.value;
		product.state = productModel.state.value;
		product.createdAt = productModel.createdAt.value;

		const repository = await this.repository();
		await repository.save(product);
		return ProductModel.toDomain(product);
	}

	async delete(productId: ProductId): Promise<void> {
		const repository = await this.repository();
		await repository.delete({ productId: productId.value });
	}

	async findAll(): Promise<ProductModel[] | null> {
		const repository = await this.repository();
		const products = await repository.find();
		if (!products) return null;
		return products.map(product => ProductModel.toDomain(product));
	}

	async update(product: ProductModel): Promise<ProductModel | null> {
		const productPrimitives = product.toPrimitives();
		const repository = await this.repository();
		const productUpdate = await repository.update(
			{ productId: product.id.value },
			productPrimitives
		);
		console.log(productUpdate);
		return null;
	}
}
