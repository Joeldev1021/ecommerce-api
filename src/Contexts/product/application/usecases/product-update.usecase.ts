import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { UsernameVO } from '../../../shared/domain/value-objects/username.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { IProductRepository } from '../../domain/repositories/product.repository';

@injectable()
export class ProductUpdateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(
		id: UuidVO,
		name: UsernameVO,
		description: DescriptionVO,
		state: StateVO
	): Promise<void> {
		/* return productRepository.update(
      new productModel(id, name, description, state)
    ); */
	}
}
