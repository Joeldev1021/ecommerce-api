import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { ProductModel } from '../../domain/models/product.model';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { ProductId } from '../../domain/value-objects/product-id.vo';

@injectable()
export class ProductFindByIdUseCase {
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(id: ProductId): Promise<ProductModel | null> {
		return await this._productRepository.findById(id);
	}
}
