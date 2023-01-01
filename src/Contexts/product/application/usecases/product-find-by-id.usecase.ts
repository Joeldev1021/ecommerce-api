import { inject } from 'tsyringe';
import { containerTypes } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ProductModel } from '../../domain/models/product.model';
import { IProductRepository } from '../../domain/repositories/product.repository';

export class ProductFindByIdUseCase {
	constructor(
		@inject(containerTypes.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(id: UuidVO): Promise<ProductModel | null> {
		return await this._productRepository.findById(id);
	}
}
