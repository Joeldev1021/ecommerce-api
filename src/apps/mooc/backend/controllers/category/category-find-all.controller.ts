import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { containerTypes } from '@apps/mooc/backend/dependency-injection/container.types';
import { CategoryFindAllUseCase } from '@category/application/usecase/category-find-all.usecase';

@injectable()
export class CategoryFindAllController {
	constructor(
		@inject(containerTypes.categoryFindAllUseCase)
		private readonly _categoryFindAllUseCase: CategoryFindAllUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const category = await this._categoryFindAllUseCase.execute();

			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
