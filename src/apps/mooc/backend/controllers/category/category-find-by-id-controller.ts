import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CategoryFindByIdUseCase } from '../../../../../Contexts/category/application/usecase/category-find-by-id.usecase';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class CategoryFindByIdController {
	constructor(
		@inject(containerTypes.categoryFindByIdUseCase)
		private readonly _categoryFindByIdUseCase: CategoryFindByIdUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const categoryId = req.params.id;
		try {
			const category = await this._categoryFindByIdUseCase.execute(
				new UuidVO(categoryId)
			);
			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
