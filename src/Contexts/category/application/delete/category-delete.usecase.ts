import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryId } from '../../domain/value-objects/category-id.vo';

@injectable()
export class CategoryDeleteUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly categoryRepository: ICategoryRepository
	) {}

	async execute(id: CategoryId): Promise<void> {
		return await this.categoryRepository.delete(id);
	}
}
