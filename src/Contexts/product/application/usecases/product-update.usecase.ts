import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { IProductRepository } from '../../domain/repositories/product.repository';

@injectable()
export class ProductUpdateUseCase {
	constructor(
		@inject(CONTAINER_TYPE.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(
		id: UuidVO,
		name: NameVO,
		description: DescriptionVO,
		state: StateVO
	): Promise<void> {
		/* return productRepository.update(
      new productModel(id, name, description, state)
    ); */
	}
}
