import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { CategoryModel } from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryId } from '../../domain/value-objects/category-id.vo';

@injectable()
export class CategoryFindByIdUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly _categoryRepository: ICategoryRepository
	) {}

	async execute(id: CategoryId): Promise<CategoryModel | null> {
		return await this._categoryRepository.findById(id);
	}
}
