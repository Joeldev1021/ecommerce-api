import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { CategoryModel } from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import categoryRepository, {
	CategoryRepository,
} from '../../infrastructure/repositories/category.repository';

@injectable()
export class CategoryFindAllUseCase {
	constructor(
		@inject(CONTAINER_TYPE.categoryRepository)
		private readonly _categoryRepository: CategoryRepository
	) {}

	async execute(): Promise<CategoryModel[] | null> {
		return await categoryRepository.findAll();
	}
}
