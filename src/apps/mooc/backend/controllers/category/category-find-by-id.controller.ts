import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CategoryFindByIdQuery } from '../../../../../Contexts/category/application/find-by-id/category-find-by-id.query';
import { CategoryFindByIdResponse } from '../../../../../Contexts/category/application/find-by-id/category-find-by-id.response';
import { IQueryBus } from '../../../../../Contexts/shared/domain/interface/query-bus';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class CategoryFindByIdController {
	constructor(
		@inject(CONTAINER_TYPES.queryBus)
		private readonly _queryBus: IQueryBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const categoryId = req.params.id;
		try {
			const query = new CategoryFindByIdQuery(categoryId);

			const category = this._queryBus.ask<CategoryFindByIdResponse>(query);

			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
