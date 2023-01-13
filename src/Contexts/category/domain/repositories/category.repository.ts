import { CategoryModel } from '../models/category.model';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';

export interface ICategoryRepository {
	findById(id: UuidVO): Promise<CategoryModel | null>;

	create(category: CategoryModel): Promise<CategoryModel | null>;

	findByName(name: NameVO): Promise<CategoryModel | null>;

	delete(categoryId: UuidVO): Promise<void>;

	findAll(): Promise<CategoryModel[] | null>;

	update(category: CategoryModel): Promise<CategoryModel | null>;
}
