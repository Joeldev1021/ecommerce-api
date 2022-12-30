import { containerTypes } from '@apps/mooc/backend/dependency-injection/container.types';
import { inject } from 'tsyringe';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { IProductRepository } from '../../domain/repositories/product.repository';

export class ProductDeleteUseCase {
	constructor(
		@inject(containerTypes.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(id: UuidVO): Promise<void> {
		return await this._productRepository.delete(id);
	}
}
