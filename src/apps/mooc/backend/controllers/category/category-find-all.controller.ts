import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CategoryFindAllUseCase } from '../../../../../Contexts/category/application/usecase/category-find-all.usecase';
import { containerTypes } from '../../dependency-injection/container.types';

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
