import {
	CategoryModel,
	ICategoryPrimitives,
} from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryEntity } from '../../../shared/infrastruture/entity/category';
import { injectable } from 'inversify';
import { ObjectType } from 'typeorm';
import { TypeOrmRepository } from '../../../shared/infrastruture/persistance/typeorm-repository';
import { CategoryId } from '../../domain/value-objects/category-id.vo';
import { CategoryName } from '../../domain/value-objects/category-name.vo';

@injectable()
export class CategoryRepository
	extends TypeOrmRepository<CategoryModel, ICategoryPrimitives>
	implements ICategoryRepository
{
	entitySchema(): ObjectType<CategoryModel> {
		return CategoryEntity;
	}

	async findAll(): Promise<CategoryModel[]> {
		const repository = await this.repository();
		const category = await repository.find();
		return category.map(ctg => CategoryModel.toDomain(ctg));
	}

	async findById(id: CategoryId): Promise<CategoryModel | null> {
		const repository = await this.repository();
		const category = await repository.findOneBy({
			categoryId: id.value,
		});
		if (category == null) return null;
		return CategoryModel.toDomain(category);
	}

	async findByName(name: CategoryName): Promise<CategoryModel | null> {
		const repository = await this.repository();
		const category = await repository.findOneBy({ name: name.value });
		if (category == null) return null;

		return CategoryModel.toDomain(category);
	}

	async create(category: CategoryModel): Promise<CategoryModel | null> {
		const categoryCreated = new CategoryEntity();

		categoryCreated.categoryId = category.id.value;
		categoryCreated.name = category.name.value;
		categoryCreated.description = category.description.value;
		categoryCreated.state = category.state.value;
		const repository = await this.repository();

		await repository.save(categoryCreated);

		return CategoryModel.toDomain(categoryCreated);
	}

	async update(category: CategoryModel): Promise<CategoryModel | null> {
		return null;
	}

	async delete(categoryId: CategoryId): Promise<void> {
		const repository = await this.repository();
		await repository.delete({ categoryId: categoryId.value });
	}
}
