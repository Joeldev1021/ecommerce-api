import { CategoryModel } from "../../domain/models/category.model";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import { DescriptionVO } from "../../domain/value-objects/description.vo";
import { NameVO } from "../../domain/value-objects/name.vo";
import { StateVO } from "../../domain/value-objects/state.vo";
import { UuidVO } from "../../domain/value-objects/uuid.vo";
import { Category } from "../models/category";
import { CategoryInterface } from "../types/category.interface";
import { ICategory } from "../types/models/category.models";

class CategoryRepository implements ICategoryRepository {
  toPersistance(categoryDomain: CategoryModel): CategoryInterface {
    const { id, name, description, state } = categoryDomain;
    return {
      id: id.value,
      name: name.value,
      description: description.value,
      state: state.value,
    };
  }

  toDomain(categoryPersistance: ICategory): CategoryModel {
    return new CategoryModel(
      new UuidVO(categoryPersistance.id),
      new NameVO(categoryPersistance.name),
      new DescriptionVO(categoryPersistance.description),
      new StateVO(categoryPersistance.state)
    );
  }

  async findAll(): Promise<CategoryModel[] | null> {
    const category = await Category.findAll();
    if (!category) return null;
    return category.map((ctg) => this.toDomain(ctg));
  }

  async findById(id: UuidVO): Promise<CategoryModel | null> {
    const category = await Category.findByPk(id.value);
    if (!category) return null;
    return this.toDomain(category);
  }

  async findByName(name: NameVO): Promise<CategoryModel | null> {
    const category = await Category.findByPk(name.value);
    if (!category) return null;
    return this.toDomain(category);
  }

  async create(category: CategoryModel): Promise<CategoryModel | null> {
    const categoryCreated = await Category.create(this.toPersistance(category));
    if (!categoryCreated) return null;
    return this.toDomain(categoryCreated);
  }

  async update(category: CategoryModel): Promise<CategoryModel | null> {
    const { id, name, description, state } = this.toPersistance(category);
    const categoryUpdate = await Category.update(
      {
        name: name,
        description: description,
        state: state,
      },
      {
        where: { id: id },
        returning: true,
      }
    );
    //todo => should return CategoryModel updated
    return null;
  }

  async delete(categoryId: UuidVO): Promise<number | null> {
    const deleteCategory = await Category.destroy({
      where: {
        id: categoryId.value,
      },
    });
    if (!deleteCategory) return null;
    return deleteCategory;
  }
}

export default new CategoryRepository();
