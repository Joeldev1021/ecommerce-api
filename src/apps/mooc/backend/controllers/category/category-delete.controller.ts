import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { CategoryDeleteUseCase } from '@category/application/usecase/category-delete.usecase';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class CategoryDeleteController {
	constructor(
		@inject(containerTypes.categoryDeleteUseCase)
		private readonly _categoryDeleteUseCase: CategoryDeleteUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const categoryId = req.params.id;
		try {
			const category = await this._categoryDeleteUseCase.execute(
				new UuidVO(categoryId)
			);
			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
