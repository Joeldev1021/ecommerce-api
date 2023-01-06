import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { IProductRepository } from '../../domain/repositories/product.repository';

@injectable()
export class ProductDeleteUseCase {
	constructor(
		@inject(CONTAINER_TYPE.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(id: UuidVO): Promise<void> {
		return await this._productRepository.delete(id);
	}
}
