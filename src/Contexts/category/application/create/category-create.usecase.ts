import { CategoryModel } from '../../domain/models/category.model';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { IEventBus } from '../../../shared/domain/interface/event-bus';
import { CategoryIdAlreadyInUseException } from '../error/category-id-already-in-use.exception';
import { CategoryNameAlreadyInUseException } from '../error/category-name-already-exists.exception';
import { CategoryId } from '../../domain/value-objects/category-id.vo';
import { CategoryName } from '../../domain/value-objects/category-name.vo';
import { CategoryDesc } from '../../domain/value-objects/category-description.vo';
import { CategoryState } from '../../domain/value-objects/category-state.vo';

@injectable()
export class CategoryCreateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly _categoryRepository: ICategoryRepository,
		@inject(CONTAINER_TYPES.rabbitMqEventBus)
		private readonly _eventBus: IEventBus
	) {}

	async execute(
		id: CategoryId,
		name: CategoryName,
		description: CategoryDesc,
		state: CategoryState
	): Promise<void> {
		const categoryExists = await this._categoryRepository.findById(id);

		if (categoryExists) throw new CategoryIdAlreadyInUseException();

		const categoryName = await this._categoryRepository.findByName(name);

		if (categoryName) throw new CategoryNameAlreadyInUseException();

		const categoryModel = CategoryModel.create(id, name, description, state);

		await this._categoryRepository.create(categoryModel);

		await this._eventBus.publish(categoryModel.pullDomainEvents());
	}
}
