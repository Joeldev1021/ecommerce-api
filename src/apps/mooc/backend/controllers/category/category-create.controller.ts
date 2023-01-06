import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../dependency-injection/container.types';
import { CategoryCreateUseCase } from '../../../../../Contexts/category/application/usecase/category-create.usecase';
import { UuidVO } from '../../../../../Contexts/shared/domain/value-objects/uuid.vo';
import { NameVO } from '../../../../../Contexts/shared/domain/value-objects/name.vo';
import { DescriptionVO } from '../../../../../Contexts/shared/domain/value-objects/description.vo';
import { StateVO } from '../../../../../Contexts/shared/domain/value-objects/state.vo';

@injectable()
export class CategoryCreateController {
	constructor(
		@inject(CONTAINER_TYPE.categoryCreateUseCase)
		private readonly _categoryCreateUseCase: CategoryCreateUseCase
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const { id, name, description, state } = req.body;
		console.log('controller :)');
		try {
			const category = await this._categoryCreateUseCase.execute(
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
