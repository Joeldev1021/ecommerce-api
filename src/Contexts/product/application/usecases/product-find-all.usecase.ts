import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';

@injectable()
export class ProductFindAllUseCase {
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(): Promise<void> {
		await this._productRepository.findAll();
	}
}
