import { CategoryModel } from '../../../../src/Contexts/category/domain/models/category.model';
import { ICategoryRepository } from '../../../../src/Contexts/category/domain/repositories/category.repository';
import { UsernameVO } from '../../../../src/Contexts/shared/domain/value-objects/username.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';

export class CategoryRepositoryMock implements ICategoryRepository {
	private saveMock: jest.Mock;

	constructor() {
		this.saveMock = jest.fn();
	}

	/* async (category: CategoryModel): Promise<void> {
    this.saveMock(course);
  } */
	async create(category: CategoryModel): Promise<CategoryModel | null> {
		this.saveMock(category);
		return null;
	}

	assertSaveHaveBeenCalledWith(expected: CategoryModel): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}

	async findAll(): Promise<CategoryModel[] | null> {
		return null;
	}

	async findById(id: UuidVO): Promise<CategoryModel | null> {
		return null;
	}

	async findByName(name: UsernameVO): Promise<CategoryModel | null> {
		return null;
	}

	async delete(categoryId: UuidVO): Promise<void> {}

	async update(category: CategoryModel): Promise<CategoryModel | null> {
		return null;
	}
}
