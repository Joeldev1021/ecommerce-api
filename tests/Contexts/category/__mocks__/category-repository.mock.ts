import { CategoryModel } from '../../../../src/Contexts/category/domain/models/category.model';
import { ICategoryRepository } from '../../../../src/Contexts/category/domain/repositories/category.repository';
import { CategoryId } from '../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { CategoryName } from '../../../../src/Contexts/category/domain/value-objects/category-name.vo';

export class CategoryRepositoryMock implements ICategoryRepository {
	private saveMock: jest.Mock;
	private CategoryFindIdMock: jest.Mock;

	constructor() {
		this.saveMock = jest.fn();
		this.CategoryFindIdMock = jest.fn();
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

	async findById(id: CategoryId): Promise<CategoryModel | null> {
		return null;
	}

	async findByName(name: CategoryName): Promise<CategoryModel | null> {
		return null;
	}

	async delete(categoryId: CategoryId): Promise<void> {}

	async update(category: CategoryModel): Promise<CategoryModel | null> {
		return null;
	}
}
