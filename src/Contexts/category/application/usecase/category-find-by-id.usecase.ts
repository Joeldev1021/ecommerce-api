import { inject, injectable } from 'tsyringe';
import { containerTypes } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { CategoryModel } from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import categoryRepository from '../../infrastructure/repositories/category.repository';

@injectable()
export class CategoryFindByIdUseCase {
	constructor(
		@inject(containerTypes.categoryRepository)
		private readonly categoryRepository: ICategoryRepository
	) {}

	async execute(id: UuidVO): Promise<CategoryModel | null> {
		return await categoryRepository.findById(id);
	}
}
