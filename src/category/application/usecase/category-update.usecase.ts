import { CategoryModel } from "../../domain/models/category.model";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryRepository } from "../../infrastructure/repositories/category.repository";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import { containerTypes } from "../../../container.types";
import { inject, injectable } from "tsyringe";

@injectable()
export class CategoryUpdateUseCase {
  constructor(
    @inject(containerTypes.categoryRepository)
    private _categoryRepository: CategoryRepository
  ) {}

  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    state: StateVO
  ) {
    return this._categoryRepository.update(
      new CategoryModel(id, name, description, state)
    );
  }
}
