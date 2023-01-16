import { CategoryModel } from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { CategoryId } from '../../domain/value-objects/category-id.vo';
import { CategoryName } from '../../domain/value-objects/category-name.vo';
import { CategoryDesc } from '../../domain/value-objects/category-description.vo';
import { CategoryState } from '../../domain/value-objects/category-state.vo';

@injectable()
export class CategoryUpdateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly _categoryRepository: ICategoryRepository
	) {}

	async execute(
		id: CategoryId,
		name: CategoryName,
		description: CategoryDesc,
		state: CategoryState
	): Promise<void> {
		await this._categoryRepository.update(
			new CategoryModel(id, name, description, state)
		);
	}
}
