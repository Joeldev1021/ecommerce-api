import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ICategoryRepository } from '../../domain/repositories/category.repository';

@injectable()
export class CategoryDeleteUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly categoryRepository: ICategoryRepository
	) {}

	async execute(id: UuidVO): Promise<void> {
		return await this.categoryRepository.delete(id);
	}
}
