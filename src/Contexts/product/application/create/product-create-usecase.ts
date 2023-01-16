import { PriceVO } from '../../../shared/domain/value-objects/price.vo';
import { ProductIdAlreadyInUseException } from '../errors/product-id-already.in-use.exception';
import { ProductModel } from '../../domain/models/product.model';
import { CreatedAtVO } from '../../../shared/domain/value-objects/created-at.vo';
import { QuantityVO } from '../../../shared/domain/value-objects/quantity.vo';
import { ProductNameAlreadyInUseException } from '../errors/product-name-already-in-use.exception';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { ProductName } from '../../domain/value-objects/product-name.vo';
import { CategoryId } from '../../../category/domain/value-objects/category-id.vo';
import { ProductId } from '../../domain/value-objects/product-id.vo';
import { ProductDesc } from '../../domain/value-objects/product-description.vo';
import { ICategoryRepository } from '../../../category/domain/repositories/category.repository';
import { ProductState } from '../../domain/value-objects/product-state.vo';
import { ProductCreatedAt } from '../../domain/value-objects/product-created-at.vo';

@injectable()
export class ProductCreateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository,
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly _categoryRepository: ICategoryRepository
	) {}

	async execute(
		id: ProductId,
		name: ProductName,
		description: ProductDesc,

		// image: string,
		categoryId: CategoryId,
		price: PriceVO,
		quantity: QuantityVO,
		state: ProductState,
		createdAt: ProductCreatedAt
	): Promise<ProductModel | null> {
		//const categoryExists = await this._categoryRepository.findById(categoryId);

		//if (!categoryExists) throw new CategoryIdNotFoundException();

		const productExists = await this._productRepository.findById(id);

		if (productExists) throw new ProductIdAlreadyInUseException();
		const productName = await this._productRepository.findByName(name);

		if (productName) throw new ProductNameAlreadyInUseException();

		return await this._productRepository.create(
			new ProductModel(
				id,
				name,
				description,
				null,
				categoryId,
				price,
				quantity,
				state,
				createdAt
			)
		);
	}
}
