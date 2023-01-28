import { CategoryModel } from '../../../../src/Contexts/category/domain/models/category.model';
import { ICategoryRepository } from '../../../../src/Contexts/category/domain/repositories/category.repository';
import { CategoryId } from '../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { CategoryName } from '../../../../src/Contexts/category/domain/value-objects/category-name.vo';

export class CategoryRepositoryMock implements ICategoryRepository {
	private saveMock: jest.Mock;
	private CategoryFind: CategoryModel;
	private findByIdMock: jest.Mock;

	constructor() {
		this.saveMock = jest.fn();
		this.findByIdMock = jest.fn();
	}

	async create(category: CategoryModel): Promise<CategoryModel | null> {
		return this.saveMock(category);
	}

	async findAll(): Promise<CategoryModel[] | null> {
		return null;
	}

	async findById(id: CategoryId): Promise<CategoryModel | null> {
		this.findByIdMock();
		return this.CategoryFind;
	}

	async findByName(name: CategoryName): Promise<CategoryModel | null> {
		return null;
	}

	async delete(categoryId: CategoryId): Promise<void> {
		this.saveMock(categoryId);
	}

	async update(category: CategoryModel): Promise<CategoryModel | null> {
		this.saveMock(category);
		return null;
	}

	public returnOnFindById(category: CategoryModel): void {
		this.CategoryFind = category;
	}

	public assertSaveHaveBeenCalledWith(expected: CategoryModel): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}

	public assetDeleteHaveBeenCalledWith(expected: CategoryId): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}

	public assertUpdateHaveBeenCalledWith(expected: CategoryModel): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}
}
