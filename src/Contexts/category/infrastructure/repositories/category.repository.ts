import { CategoryModel } from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { Category } from '../../../shared/infrastruture/models/category';
import { injectable } from 'inversify';

@injectable()
export class CategoryRepository implements ICategoryRepository {
	async findAll(): Promise<CategoryModel[] | null> {
		const category = await Category.findAll();
		if (!category) return null;
		return category.map(ctg => CategoryModel.toDomain(ctg));
	}

	async findById(id: UuidVO): Promise<CategoryModel | null> {
		const category = await Category.findByPk(id.value);
		if (category == null) return null;
		return CategoryModel.toDomain(category);
	}

	async findByName(name: NameVO): Promise<CategoryModel | null> {
		const category = await Category.findByPk(name.value);
		if (category == null) return null;

		return CategoryModel.toDomain(category);
	}

	async create(category: CategoryModel): Promise<CategoryModel | null> {
		const categoryCreated = await Category.create(category.toPrimitives());
		if (!categoryCreated) return null;
		return CategoryModel.toDomain(categoryCreated);
	}

	async update(category: CategoryModel): Promise<CategoryModel | null> {
		return null;
	}

	async delete(categoryId: UuidVO): Promise<void> {
		await Category.destroy({
			where: {
				category_id: categoryId.value,
			},
		});
	}
}

export default new CategoryRepository();
