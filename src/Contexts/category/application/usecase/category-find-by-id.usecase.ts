import { inject, injectable } from 'tsyringe';
import { containerTypes } from '@apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import categoryRepository, {
	CategoryRepository,
} from '../../infrastructure/repositories/category.repository';

@injectable()
export class CategoryFindByIdUseCase {
	constructor(
		@inject(containerTypes.categoryRepository)
		private readonly categoryRepository: ICategoryRepository
	) {}

	async execute(id: UuidVO) {
		return await categoryRepository.findById(id);
	}
}
