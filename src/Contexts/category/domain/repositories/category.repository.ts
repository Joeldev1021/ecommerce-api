import { CategoryModel } from '../models/category.model';
import { UsernameVO } from '../../../shared/domain/value-objects/username.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';

export interface ICategoryRepository {
	findById(id: UuidVO): Promise<CategoryModel | null>;

	create(category: CategoryModel): Promise<CategoryModel | null>;

	findByName(name: UsernameVO): Promise<CategoryModel | null>;

	delete(categoryId: UuidVO): Promise<void>;

	findAll(): Promise<CategoryModel[] | null>;

	update(category: CategoryModel): Promise<CategoryModel | null>;
}
