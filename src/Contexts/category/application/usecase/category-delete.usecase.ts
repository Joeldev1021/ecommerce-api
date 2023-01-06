import { inject, injectable } from 'tsyringe';
import { CONTAINER_TYPE } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import categoryRepository, {
	CategoryRepository,
} from '../../infrastructure/repositories/category.repository';

@injectable()
export class CategoryDeleteUseCase {
	constructor(
		@inject(CONTAINER_TYPE.categoryRepository)
		private readonly categoryRepository: CategoryRepository
	) {}

	async execute(id: UuidVO): Promise<void> {
		return await categoryRepository.delete(id);
	}
}
