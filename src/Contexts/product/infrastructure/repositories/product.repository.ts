import { injectable } from 'inversify';
import { ObjectType } from 'typeorm';
import { UsernameVO } from '../../../shared/domain/value-objects/username.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ProductEntity } from '../../../shared/infrastruture/entity/product';
import { TypeOrmRepository } from '../../../shared/infrastruture/persistance/typeorm-repository';
import {
	IProductPrimitives,
	ProductModel,
} from '../../domain/models/product.model';
import { IProductRepository } from '../../domain/repositories/product.repository';

@injectable()
export class ProductRepository
	extends TypeOrmRepository<ProductModel, IProductPrimitives>
	implements IProductRepository
{
	entitySchema(): ObjectType<ProductModel> {
		return ProductEntity;
	}

	async findById(id: UuidVO): Promise<ProductModel | null> {
		const repository = await this.repository();
		const product = await repository.findOneBy({ product_id: id.value });
		if (!product) return null;
		return ProductModel.toDomain(product);
	}

	async findByName(name: UsernameVO): Promise<ProductModel | null> {
		const repository = await this.repository();
		const product = await repository.findOneBy({ name: name.value });
		if (!product) return null;

		return ProductModel.toDomain(product);
	}

	async create(productModel: ProductModel): Promise<ProductModel | null> {
		const product = new ProductEntity();
		product.product_id = productModel.id.value;
		product.name = productModel.name.value;
		product.description = productModel.description.value;
		product.imageUrl = productModel.imageUrl || '';
		product.category_id = productModel.categoryId.value;
		product.price = productModel.price.value;
		product.quantity = productModel.quantity.value;
		product.state = productModel.state.value;
		product.createdAt = productModel.createdAt.value;

		const repository = await this.repository();
		await repository.save(product);
		return ProductModel.toDomain(product);
	}

	async delete(productId: UuidVO): Promise<void> {
		const repository = await this.repository();
		await repository.delete({ product_id: productId.value });
	}

	async findAll(): Promise<ProductModel[] | null> {
		const repository = await this.repository();
		const products = await repository.find();
		if (!products) return null;
		return products.map(product => ProductModel.toDomain(product));
	}

	async update(product: ProductModel): Promise<ProductModel | null> {
		//const repository = await this.repository();
		//todo => should return productModel updated
		return null;
	}
}
