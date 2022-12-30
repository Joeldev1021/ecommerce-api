import { inject, injectable } from 'tsyringe';
import { containerTypes } from '@apps/mooc/backend/dependency-injection/container.types';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import categoryRepository, {
	CategoryRepository,
} from '../../infrastructure/repositories/category.repository';

@injectable()
export class CategoryFindAllUseCase {
	constructor(
		@inject(containerTypes.categoryRepository)
		private readonly _categoryRepository: CategoryRepository
	) {}

	async execute() {
		return await categoryRepository.findAll();
	}
}
