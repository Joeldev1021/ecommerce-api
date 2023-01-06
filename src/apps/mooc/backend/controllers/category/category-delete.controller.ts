import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CategoryDeleteUseCase } from '../../../../../Contexts/category/application/usecase/category-delete.usecase';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { CONTAINER_TYPE } from '../../dependency-injection/container.types';

@injectable()
export class CategoryDeleteController {
	constructor(
		@inject(CONTAINER_TYPE.categoryDeleteUseCase)
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
