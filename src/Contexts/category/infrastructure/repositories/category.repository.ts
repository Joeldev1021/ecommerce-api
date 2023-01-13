import {
	CategoryModel,
	ICategoryPrimitives,
} from '../../domain/models/category.model';
import { ICategoryRepository } from '../../domain/repositories/category.repository';
import { UsernameVO } from '../../../shared/domain/value-objects/username.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { CategoryEntity } from '../../../shared/infrastruture/entity/category';
import { injectable } from 'inversify';
import { ObjectType } from 'typeorm';
import { TypeOrmRepository } from '../../../shared/infrastruture/persistance/typeorm-repository';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';

@injectable()
export class CategoryRepository
	extends TypeOrmRepository<CategoryModel, ICategoryPrimitives>
	implements ICategoryRepository
{
	entitySchema(): ObjectType<CategoryModel> {
		return CategoryEntity;
	}

	async findAll(): Promise<CategoryModel[] | null> {
		const repository = await this.repository();
		const category = await repository.find();
		if (!category) return null;
		return category.map(ctg => CategoryModel.toDomain(ctg));
	}

	async findById(id: UuidVO): Promise<CategoryModel | null> {
		const repository = await this.repository();
		const category = await repository.findOneBy({
			category_id: id.value,
		});
		if (category == null) return null;
		return CategoryModel.toDomain(category);
	}

	async findByName(name: NameVO): Promise<CategoryModel | null> {
		const repository = await this.repository();
		const category = await repository.findOneBy({ name: name.value });
		if (category == null) return null;

		return CategoryModel.toDomain(category);
	}

	async create(category: CategoryModel): Promise<CategoryModel | null> {
		const categoryCreated = new CategoryEntity();

		categoryCreated.category_id = category.id.value;
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

	async delete(categoryId: UuidVO): Promise<void> {
		const repository = await this.repository();
		await repository.delete({ category_id: categoryId.value });
	}
}
