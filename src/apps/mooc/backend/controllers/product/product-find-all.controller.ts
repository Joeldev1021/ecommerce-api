import { ProductFindAllResponse } from './../../../../../Contexts/product/application/find-all/product-find-all.response';
import { ProductFindAllQuery } from './../../../../../Contexts/product/application/find-all/product-find-all.query';
import { IQueryBus } from './../../../../../Contexts/shared/domain/interface/query-bus';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class ProductFindAllController {
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
			const query = new ProductFindAllQuery();
			const products = this._queryBus.ask<ProductFindAllResponse>(query);
			res.status(200).send(products);
		} catch (error) {
			next(error);
		}
	}
}
