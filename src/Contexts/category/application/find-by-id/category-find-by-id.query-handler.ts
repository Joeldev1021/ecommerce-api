import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IQueryHandler } from '../../../shared/domain/interface/query-handler';
import { Query } from '../../../shared/domain/query';
import { CategoryFindByIdUseCase } from './category-find-by-id.usecase';
import { CategoryFindByIdQuery } from './category-find-by-id.query';
import { CategoryFindByIdResponse } from './category-find-by-id.response';
import { CategoryId } from '../../domain/value-objects/category-id.vo';

@injectable()
export class CategoryFindCounterQueryHandler
	implements IQueryHandler<CategoryFindByIdQuery, CategoryFindByIdResponse>
{
	constructor(
		@inject(CONTAINER_TYPES.categoryFindByIdUseCase)
		private _categoryFindByIdUseCase: CategoryFindByIdUseCase
	) {}

	subscribeTo(): Query {
		return CategoryFindByIdQuery;
	}

	async handle(
		query: CategoryFindByIdQuery
	): Promise<CategoryFindByIdResponse> {
		const categories = await this._categoryFindByIdUseCase.execute(
			new CategoryId(query.id)
		);

		return new CategoryFindByIdResponse(categories);
	}
}
