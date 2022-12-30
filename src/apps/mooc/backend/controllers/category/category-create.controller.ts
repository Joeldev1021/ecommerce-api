import 'reflect-metadata';
import { NextFunction, Request, Response } from 'express';
import { DescriptionVO } from '@shared/domain/value-objects/description.vo';
import { NameVO } from '@shared/domain/value-objects/name.vo';
import { StateVO } from '@shared/domain/value-objects/state.vo';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { CategoryCreateUseCase } from '@category/application/usecase/category-create.usecase';
import { inject, injectable } from 'tsyringe';
import { containerTypes } from '../../dependency-injection/container.types';

@injectable()
export class CategoryCreateController {
	constructor(
		@inject(containerTypes.categoryCreateUseCase)
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
