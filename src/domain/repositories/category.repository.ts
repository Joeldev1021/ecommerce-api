import { CategoryInterface } from "../../infrastruture/types/category.interface";
import { CategoryModel } from "../models/category.model";
import { NameVO } from "../value-objects/name.vo";
import { UuidVO } from "../value-objects/uuid.vo";

export interface ICategoryRepository {
  toPersistance(categoryDomain: CategoryModel): CategoryInterface;

  toDomain(category: CategoryInterface): CategoryModel;

  findById(id: UuidVO): Promise<CategoryModel | null>;

  create(category: CategoryModel): Promise<CategoryModel | null>;

  findByName(name: NameVO): Promise<CategoryModel | null>;
}
