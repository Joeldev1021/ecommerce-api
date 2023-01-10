import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../../apps/mooc/backend/dependency-injection/container.types';
import { IQueryHandler } from '../../../../shared/domain/interface/query-handler';
import { Query } from '../../../../shared/domain/query';
import { CategoryFindCounter } from './category-find-counter';
import { CategoryFindCounterQuery } from './category-find-counter.query';
import { CategoryFindCounterResponse } from './category-find-counter.response';

@injectable()
export class CategoryFindCounterQueryHandler
	implements
		IQueryHandler<CategoryFindCounterQuery, CategoryFindCounterResponse>
{
	constructor(
		@inject(CONTAINER_TYPES.categoryFindCounter)
		private _categoryFindCounter: CategoryFindCounter
	) {}

	subscribeTo(): Query {
		return CategoryFindCounterQuery;
	}

	async handle(
		query: CategoryFindCounterQuery
	): Promise<CategoryFindCounterResponse> {
		console.log('catgoryfindCOunterqueryhandler');
		const counter = await this._categoryFindCounter.execute();

		return new CategoryFindCounterResponse(counter);
	}
}
