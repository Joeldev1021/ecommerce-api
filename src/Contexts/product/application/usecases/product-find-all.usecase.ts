import { inject, injectable } from 'tsyringe';
import { containerTypes } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';

@injectable()
export class ProductFindAllUseCase {
	constructor(
		@inject(containerTypes.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute() {
		return await this._productRepository.findAll();
	}
}
