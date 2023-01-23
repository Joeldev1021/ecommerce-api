import { ICategoryRepository } from './../../domain/repositories/category.repository';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IQueryHandler } from '../../../shared/domain/interface/query-handler';
import { Query } from '../../../shared/domain/query';
import { CategoryFindCounterQuery } from './category-find-counter.query';
import { CategoryFindCounterResponse } from './category-find-counter.response';

@injectable()
export class CategoryFindCounterQueryHandler
	implements
		IQueryHandler<CategoryFindCounterQuery, CategoryFindCounterResponse>
{
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private _categoryRepository: ICategoryRepository
	) {}

	subscribeTo(): Query {
		return CategoryFindCounterQuery;
	}

	async handle(
		query: CategoryFindCounterQuery
	): Promise<CategoryFindCounterResponse> {
		console.log('catgoryfindCOunterqueryhandler');
		const categories = await this._categoryRepository.findAll();

		if (!categories) throw new Error('categories not found');

		return new CategoryFindCounterResponse(categories?.length);
	}
}
