import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ProductModel } from '../../domain/models/product.model';
import { IProductRepository } from '../../domain/repositories/product.repository';

@injectable()
export class ProductFindByIdUseCase {
	constructor(
		@inject(CONTAINER_TYPE.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(id: UuidVO): Promise<ProductModel | null> {
		return await this._productRepository.findById(id);
	}
}
