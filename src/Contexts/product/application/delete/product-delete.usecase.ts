import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { ProductId } from '../../domain/value-objects/product-id.vo';

@injectable()
export class ProductDeleteUseCase {
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(id: ProductId): Promise<void> {
		return await this._productRepository.delete(id);
	}
}
