import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CategoryFindAllUseCase } from '../../../../../Contexts/category/application/usecase/category-find-all.usecase';
import { CONTAINER_TYPE } from '../../dependency-injection/container.types';

@injectable()
export class CategoryFindAllController {
	constructor(
		@inject(CONTAINER_TYPE.categoryFindAllUseCase)
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
