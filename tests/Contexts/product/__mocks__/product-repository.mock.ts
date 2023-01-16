import { ProductModel } from '../../../../src/Contexts/product/domain/models/product.model';
import { IProductRepository } from '../../../../src/Contexts/product/domain/repositories/product.repository';
import { ProductId } from '../../../../src/Contexts/product/domain/value-objects/product-id.vo';
import { ProductName } from '../../../../src/Contexts/product/domain/value-objects/product-name.vo';

export class ProductRepositoryMock implements IProductRepository {
	private saveMock: jest.Mock;

	constructor() {
		this.saveMock = jest.fn();
	}

	/* async (Product: ProductModel): Promise<void> {
    this.saveMock(course);
  } */
	async create(product: ProductModel): Promise<ProductModel | null> {
		console.log('product created', product);
		return this.saveMock(product);
	}

	assertSaveHaveBeenCalledWith(expected: ProductModel): void {
		console.log('expected', expected);
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}

	async findAll(): Promise<ProductModel[] | null> {
		return null;
	}

	async findById(id: ProductId): Promise<ProductModel | null> {
		return null;
	}

	async findByName(name: ProductName): Promise<ProductModel | null> {
		return null;
	}

	async delete(ProductId: ProductId): Promise<void> {}

	async update(product: ProductModel): Promise<ProductModel | null> {
		return null;
	}
}
