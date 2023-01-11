import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { CategoryModel } from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';

@injectable()
export class CategoryFindAllUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly _categoryRepository: ICategoryRepository
	) {}

	async execute(): Promise<CategoryModel[] | null> {
		return await this._categoryRepository.findAll();
	}
}
