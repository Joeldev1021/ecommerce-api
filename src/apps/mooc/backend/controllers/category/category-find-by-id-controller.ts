import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { CategoryFindByIdUseCase } from '@category/application/usecase/category-find-by-id.usecase';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class CategoryFindByIdController {
	constructor(
		@inject(containerTypes.productFindByIdUseCase)
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
