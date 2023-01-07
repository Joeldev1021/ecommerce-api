import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CategoryFindCounterQuery } from '../../../../../Contexts/category/application/usecase/find/category-find-counter.query';
import { CategoryFindCounterResponse } from '../../../../../Contexts/category/application/usecase/find/category-find-counter.response';
import { IQueryBus } from '../../../../../Contexts/shared/domain/interface/query-bus';
import { InMemoryQueryBus } from '../../../../../Contexts/shared/infrastruture/query-bus/in-memory-query-bus';
import { CONTAINER_TYPE } from '../../dependency-injection/container.types';

@injectable()
export class CategoryFindCounterController {
	constructor(
		@inject(CONTAINER_TYPE.queryBus)
		private readonly _queryBus: InMemoryQueryBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			console.log('controller find');
			const query = new CategoryFindCounterQuery();
			const counter = await this._queryBus.ask<CategoryFindCounterResponse>(
				query
			);

			res.status(200).send(counter);
		} catch (error) {
			next(error);
		}
	}
}