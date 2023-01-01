import { CategoryModel } from '../../domain/models/category.model';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { EventBus } from '../../../shared/infrastruture/event-bus/event-bus';
import { inject, injectable } from 'tsyringe';
import { CategoryIdAlreadyInUseException } from '../error/category-id-already-in-use.exception';
import { CategoryNameAlreadyInUseException } from '../error/category-name-already-exists.exception';
import { containerTypes } from '../../../../apps/mooc/backend/dependency-injection/container.types';

@injectable()
export class CategoryCreateUseCase {
	constructor(
		@inject(containerTypes.categoryRepository)
		private readonly _categoryRepository: CategoryRepository,
		private readonly _eventBus: EventBus
	) {}

	async execute(
		id: UuidVO,
		name: NameVO,
		description: DescriptionVO,
		state: StateVO
	): Promise<void> {
		const categoryExists = await this._categoryRepository.findById(id);
		if (categoryExists != null) throw new CategoryIdAlreadyInUseException();
		const categoryName = await this._categoryRepository.findByName(name);
		if (categoryName != null) throw new CategoryNameAlreadyInUseException();

		const categoryModel = CategoryModel.create(id, name, description, state);
		await this._categoryRepository.create(categoryModel);

		await this._eventBus.publish(categoryModel.pullDomainEvents());
	}
}
