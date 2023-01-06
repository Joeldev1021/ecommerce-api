import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';

@injectable()
export class ProductFindAllUseCase {
	constructor(
		@inject(CONTAINER_TYPE.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute() {
		return await this._productRepository.findAll();
	}
}
