import { ICategoryRepository } from './../../domain/repositories/category.repository';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IQueryHandler } from '../../../shared/domain/interface/query-handler';
import { Query } from '../../../shared/domain/query';
import { CategoryFindAllQuery } from './category-find-all.query';
import { CategoryFindAllResponse } from './category-find-all.response';

@injectable()
export class CategoryFindAllQueryHandler
	implements IQueryHandler<CategoryFindAllQuery, CategoryFindAllResponse>
{
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private _categoryRepository: ICategoryRepository
	) {}

	subscribeTo(): Query {
		return CategoryFindAllQuery;
	}

	async handle(query: CategoryFindAllQuery): Promise<CategoryFindAllResponse> {
		const categories = await this._categoryRepository.findAll();

		return new CategoryFindAllResponse(categories);
	}
}
