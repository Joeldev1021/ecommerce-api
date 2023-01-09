import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { PriceVO } from '../../domain/value-objects/price.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ProductIdAlreadyInUseException } from '../errors/product-id-already.in-use.exception';
import { ProductModel } from '../../domain/models/product.model';
import { CreatedAtVO } from '../../../shared/domain/value-objects/created-at.vo';
import { QuantityVO } from '../../domain/value-objects/quantity.vo';
import { ProductNameAlreadyInUseException } from '../errors/product-name-already-in-use.exception';
import { IProductRepository } from '../../domain/repositories/product.repository';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';

@injectable()
export class ProductCreateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	async execute(
		id: UuidVO,
		name: NameVO,
		description: DescriptionVO,
		// image: string,
		productId: UuidVO,
		price: PriceVO,
		quantity: QuantityVO,
		state: StateVO
	): Promise<ProductModel | null> {
		const productExists = await this._productRepository.findById(id);
		if (productExists != null) throw new ProductIdAlreadyInUseException();
		const productName = await this._productRepository.findByName(name);
		if (productName != null) throw new ProductNameAlreadyInUseException();

		return await this._productRepository.create(
			new ProductModel(
				id,
				name,
				description,
				null,
				productId,
				price,
				quantity,
				state,
				new CreatedAtVO(new Date())
			)
		);
	}
}
