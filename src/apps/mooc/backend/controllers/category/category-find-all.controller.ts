import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CategoryFindAllQuery } from '../../../../../Contexts/category/application/find-all/category-find-all.query';
import { CategoryFindAllResponse } from '../../../../../Contexts/category/application/find-all/category-find-all.response';
import { IQueryBus } from '../../../../../Contexts/shared/domain/interface/query-bus';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class CategoryFindAllController {
	constructor(
		@inject(CONTAINER_TYPES.queryBus)
		private readonly _queryBus: IQueryBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const category = await this._queryBus.ask<CategoryFindAllResponse>(
				new CategoryFindAllQuery()
			);

			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
