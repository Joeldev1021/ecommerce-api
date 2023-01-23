import { ProductFindByIdResponse } from './../../../../../Contexts/product/application/find-by-id/product-find-by-id.response';
import { IQueryBus } from './../../../../../Contexts/shared/domain/interface/query-bus';
import { ProductFindByIdQuery } from './../../../../../Contexts/product/application/find-by-id/product-find-by-id.query';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';

@injectable()
export class ProductFindByIdController {
	constructor(
		@inject(CONTAINER_TYPES.queryBus)
		private _queryBus: IQueryBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const productId = req.params.id;
		try {
			const query = new ProductFindByIdQuery(productId);

			const product = this._queryBus.ask<ProductFindByIdResponse>(query);

			res.status(200).send(product);
		} catch (error) {
			next(error);
		}
	}
}
