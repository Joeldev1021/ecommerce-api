import { inject } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../../apps/mooc/backend/dependency-injection/container.types';
import { IQueryHandler } from '../../../../shared/domain/interface/query-handler';
import { Query } from '../../../../shared/domain/query';
import { CategoryFindCounter } from './category-find-counter';
import { CategoryFindCounterQuery } from './category-find-counter.query';
import { CategoryFindCounterResponse } from './category-find-counter.response';

export class CategoryFindCounterQueryHandler
	implements
		IQueryHandler<CategoryFindCounterQuery, CategoryFindCounterResponse>
{
	constructor(
		@inject(CONTAINER_TYPE.categoryFindCounter)
		private _categoryFindCounter: CategoryFindCounter
	) {}

	subscribeTo(): Query {
		return CategoryFindCounterQuery;
	}

	async handle(
		query: CategoryFindCounterQuery
	): Promise<CategoryFindCounterResponse> {
		const counter = await this._categoryFindCounter.execute();

		return new CategoryFindCounterResponse(counter);
	}
}
