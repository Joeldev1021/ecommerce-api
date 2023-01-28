import { BrandId } from './../../../brand/domain/value-objects/brand-id.vo';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { PriceVO } from '../../../shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../shared/domain/value-objects/quantity.vo';
import { ProductModel } from '../../domain/models/product.model';
import { ProductNotFoundException } from '../errors/product-not-found-exception';
import { ProductId } from '../../domain/value-objects/product-id.vo';
import { ProductName } from '../../domain/value-objects/product-name.vo';
import { ProductDesc } from '../../domain/value-objects/product-description.vo';
import { CategoryId } from '../../../category/domain/value-objects/category-id.vo';
import { ProductState } from '../../domain/value-objects/product-state.vo';

@injectable()
export class ProductUpdateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
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
		brandId: BrandId
	): Promise<void> {
		const productFound = await this._productRepository.findById(id);
		if (!productFound) throw new ProductNotFoundException();

		await this._productRepository.update(
			new ProductModel(
				id,
				name,
				description,
				null,
				categoryId,
				price,
				quantity,
				state,
				productFound.createdAt,
				brandId
			)
		);
	}
}
