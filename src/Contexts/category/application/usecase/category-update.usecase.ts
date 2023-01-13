import { CategoryModel } from '../../domain/models/category.model';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { UsernameVO } from '../../../shared/domain/value-objects/username.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';

@injectable()
export class CategoryUpdateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly _categoryRepository: ICategoryRepository
	) {}

	async execute(
		id: UuidVO,
		name: UsernameVO,
		description: DescriptionVO,
		state: StateVO
	): Promise<void> {
		await this._categoryRepository.update(
			new CategoryModel(id, name, description, state)
		);
	}
}
