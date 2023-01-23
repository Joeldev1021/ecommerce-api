import { CategoryModel } from '../models/category.model';
import { CategoryId } from '../value-objects/category-id.vo';
import { CategoryName } from '../value-objects/category-name.vo';

export interface ICategoryRepository {
	findById(id: CategoryId): Promise<CategoryModel | null>;

	create(category: CategoryModel): Promise<CategoryModel | null>;

	findByName(name: CategoryName): Promise<CategoryModel | null>;

	delete(categoryId: CategoryId): Promise<void>;

	findAll(): Promise<CategoryModel[]>;

	update(category: CategoryModel): Promise<CategoryModel | null>;
}
