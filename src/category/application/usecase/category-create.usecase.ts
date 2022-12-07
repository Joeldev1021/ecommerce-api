import { CategoryModel } from "../../domain/models/category.model";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryRepository } from "../../infrastructure/repositories/category.repository";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import { injectable, inject, singleton, container } from "tsyringe";
import { CategoryIdAlreadyInUseException } from "../error/category-id-already-in-use.exception";
import { CategoryNameAlreadyInUseException } from "../error/category-name-already-exists.exception";

export class CategoryCreateUseCase {
  private _categoryRepository: ICategoryRepository;
  constructor(dependencies: { categoryRepository: CategoryRepository }) {
    this._categoryRepository = dependencies.categoryRepository;
  }

  async execute(
    id: UuidVO,
    name: NameVO,
    description: DescriptionVO,
    state: StateVO
  ) {
    const categoryExists = await this._categoryRepository.findById(id);
    if (categoryExists) throw new CategoryIdAlreadyInUseException();
    const categoryName = await this._categoryRepository.findByName(name);
    if (categoryName) throw new CategoryNameAlreadyInUseException();

    return this._categoryRepository.create(
      new CategoryModel(id, name, description, state)
    );
  }
}
