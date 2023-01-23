import { IProductRepository } from './../../domain/repositories/product.repository';
import { CONTAINER_TYPES } from './../../../../apps/mooc/backend/dependency-injection/container.types';
import { inject, injectable } from 'inversify';
import { ProductFindAllResponse } from './product-find-all.response';
import { ProductFindAllQuery } from './product-find-all.query';
import { IQueryHandler } from './../../../shared/domain/interface/query-handler';
import { Query } from '../../../shared/domain/query';

@injectable()
export class ProductFindAllQueryHandler
	implements IQueryHandler<ProductFindAllQuery, ProductFindAllResponse>
{
	constructor(
		@inject(CONTAINER_TYPES.productRepository)
		private readonly _productRepository: IProductRepository
	) {}

	subscribeTo(): Query {
		return ProductFindAllQuery;
	}

	async handle(query: ProductFindAllQuery): Promise<ProductFindAllResponse> {
		const products = await this._productRepository.findAll();

		return new ProductFindAllResponse(products);
	}
}
