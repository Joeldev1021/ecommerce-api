import { NextFunction, Request, Response } from 'express';
import { CategoryUpdateUseCase } from '@category/application/usecase/category-update.usecase';
import { DescriptionVO } from '@shared/domain/value-objects/description.vo';
import { NameVO } from '@shared/domain/value-objects/name.vo';
import { StateVO } from '@shared/domain/value-objects/state.vo';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { containerTypes } from '@apps/mooc/backend/dependency-injection/container.types';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CategoryUpdateController {
	constructor(
		@inject(containerTypes.productUpdateUseCase)
		private readonly _categoryUpdateUseCase: CategoryUpdateUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, state } = req.body;
		try {
			const category = await this._categoryUpdateUseCase.execute(
				new UuidVO(id),
				new NameVO(name),
				new DescriptionVO(description),
				new StateVO(state)
			);
			res.status(200).send(category);
		} catch (error) {
			next(error);
		}
	}
}
