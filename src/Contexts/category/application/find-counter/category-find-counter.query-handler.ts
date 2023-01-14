import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IQueryHandler } from '../../../shared/domain/interface/query-handler';
import { Query } from '../../../shared/domain/query';
import { CategoryFindCounterQuery } from './category-find-counter.query';
import { CategoryFindCounterResponse } from './category-find-counter.response';
import { CategoryFindCounterUseCase } from './category-find-counter.usecase';

@injectable()
export class CategoryFindCounterQueryHandler
	implements
		IQueryHandler<CategoryFindCounterQuery, CategoryFindCounterResponse>
{
	constructor(
		@inject(CONTAINER_TYPES.categoryFindCounterUseCase)
		private _categoryFindCounterUseCase: CategoryFindCounterUseCase
	) {}

	subscribeTo(): Query {
		return CategoryFindCounterQuery;
	}

	async handle(
		query: CategoryFindCounterQuery
	): Promise<CategoryFindCounterResponse> {
		console.log('catgoryfindCOunterqueryhandler');
		const counter = await this._categoryFindCounterUseCase.execute();

		return new CategoryFindCounterResponse(counter);
	}
}
