import { CategoryInterface } from "../../infrastructure/types/category.interface";
import { CategoryModel } from "../models/category.model";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";

export interface ICategoryRepository {
  toPersistance(categoryDomain: CategoryModel): CategoryInterface;

  toDomain(category: CategoryInterface): CategoryModel;

  findById(id: UuidVO): Promise<CategoryModel | null>;

  create(category: CategoryModel): Promise<CategoryModel | null>;

  findByName(name: NameVO): Promise<CategoryModel | null>;

  delete(categoryId: UuidVO): Promise<number | null>;

  findAll(): Promise<CategoryModel[] | null>;

  update(category: CategoryModel): Promise<CategoryModel | null>;
}
