import { CategoryModel } from '../../domain/models/category.model';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { IEventBus } from '../../../shared/domain/interface/event-bus';
import { CategoryIdAlreadyInUseException } from '../error/category-id-already-in-use.exception';
import { CategoryNameAlreadyInUseException } from '../error/category-name-already-exists.exception';

@injectable()
export class CategoryCreateUseCase {
	constructor(
		@inject(CONTAINER_TYPES.categoryRepository)
		private readonly _categoryRepository: ICategoryRepository,
		@inject(CONTAINER_TYPES.rabbitMqEventBus)
		private readonly _eventBus: IEventBus
	) {}

	async execute(
		id: UuidVO,
		name: NameVO,
		description: DescriptionVO,
		state: StateVO
	): Promise<void> {
		const categoryExists = await this._categoryRepository.findById(id);

		if (categoryExists) throw new CategoryIdAlreadyInUseException();

		const categoryName = await this._categoryRepository.findByName(name);

		if (!categoryName) throw new CategoryNameAlreadyInUseException();

		const categoryModel = CategoryModel.create(id, name, description, state);

		await this._categoryRepository.create(categoryModel);

		await this._eventBus.publish(categoryModel.pullDomainEvents());
	}
}
