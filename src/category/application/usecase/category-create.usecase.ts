import { CategoryModel } from "../../domain/models/category.model";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryRepository } from "../../infrastructure/repositories/category.repository";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryIdAlreadyInUseException } from "../error/category-id-already-in-use.exception";
import { CategoryNameAlreadyInUseException } from "../error/category-name-already-exists.exception";
import { EventBus } from "../../../shared/infrastruture/event-bus/event-bus";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";

@injectable()
export class CategoryCreateUseCase {
  constructor(
    @inject(containerTypes.categoryRepository)
    private _categoryRepository: CategoryRepository,
    private _eventBus: EventBus
  ) {}

  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    state: StateVO
  ) {
    //const categoryExists = await this._categoryRepository.findById(id);
    //if (categoryExists) throw new CategoryIdAlreadyInUseException();
    //const categoryName = await this._categoryRepository.findByName(name);
    //if (categoryName) throw new CategoryNameAlreadyInUseException();

    const categoryModel = CategoryModel.create(id, name, description, state);
    //await this._categoryRepository.create(categoryModel);

    this._eventBus.publish(categoryModel.pullDomainEvents());
  }
}
