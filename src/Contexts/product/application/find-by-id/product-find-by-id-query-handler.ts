import { ProductFindByIdResponse } from './product-find-by-id.response';
import { ProductFindByIdQuery } from './product-find-by-id.query';
import { IProductRepository } from './../../domain/repositories/product.repository';
import { CONTAINER_TYPES } from './../../../../apps/mooc/backend/dependency-injection/container.types';
import { inject } from 'inversify';
import { IQueryHandler } from './../../../shared/domain/interface/query-handler';
import { Query } from '../../../shared/domain/query';
import { ProductId } from '../../domain/value-objects/product-id.vo';

export class ProductFindByIdQueryHandler
	implements IQueryHandler<ProductFindByIdQuery, ProductFindByIdResponse>
{
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	subscribeTo(): Query {
		return ProductFindByIdQuery;
	}

	async handle(query: ProductFindByIdQuery): Promise<ProductFindByIdResponse> {
		const product = await this._productRepository.findById(
			new ProductId(query.id)
		);

		return new ProductFindByIdResponse(product);
	}
}
