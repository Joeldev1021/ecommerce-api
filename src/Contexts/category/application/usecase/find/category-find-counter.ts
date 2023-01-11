import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../../apps/mooc/backend/dependency-injection/container.types';
import { ICategoryRepository } from '../../../domain/repositories/category.repository';

@injectable()
export class CategoryFindCounter {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private _categoryRepository: ICategoryRepository
	) {}

	async execute(): Promise<number> {
		const categories = await this._categoryRepository.findAll();
		if (!categories) throw new Error('category not found');

		return categories.length;
	}
}
