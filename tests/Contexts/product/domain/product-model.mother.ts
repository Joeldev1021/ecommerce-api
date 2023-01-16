import { CategoryCreateCommand } from '../../../../src/Contexts/category/domain/command/category-created.command';
import { CategoryModel } from '../../../../src/Contexts/category/domain/models/category.model';
import { CategoryDesc } from '../../../../src/Contexts/category/domain/value-objects/category-description.vo';
import { CategoryId } from '../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { CategoryName } from '../../../../src/Contexts/category/domain/value-objects/category-name.vo';
import { CategoryState } from '../../../../src/Contexts/category/domain/value-objects/category-state.vo';
import { ProductCreateCommand } from '../../../../src/Contexts/product/domain/command/product-create.command';
import { ProductModel } from '../../../../src/Contexts/product/domain/models/product.model';
import { ProductDesc } from '../../../../src/Contexts/product/domain/value-objects/product-description.vo';
import { ProductId } from '../../../../src/Contexts/product/domain/value-objects/product-id.vo';
import { ProductName } from '../../../../src/Contexts/product/domain/value-objects/product-name.vo';
import { ProductState } from '../../../../src/Contexts/product/domain/value-objects/product-state.vo';
import { CreatedAtVO } from '../../../../src/Contexts/shared/domain/value-objects/created-at.vo';
import { PriceVO } from '../../../../src/Contexts/shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../../src/Contexts/shared/domain/value-objects/quantity.vo';
import { CategoryIdMother } from '../../category/domain/category-id.mother';
import { ProductDescriptionMother } from './product-description.mother';
import { ProductIdMother } from './product-id.mother';
import { ProductNameMother } from './product-name.mother';
import { ProductPriceMother } from './product-price.mother';
import { ProductQuantityMother } from './product-quantity.mother';
import { ProductStateMother } from './product-state.mother';
import { ProductCreatedAt } from '../../../../src/Contexts/product/domain/value-objects/product-created-at.vo';
import { ProductCreatedAtMother } from './product-created-at.vo';

export class ProductModelMother {
	static create(
		id: ProductId,
		name: ProductName,
		description: ProductDesc,
		categoryId: CategoryId,
		price: PriceVO,
		quantity: QuantityVO,
		state: ProductState,
		createdAt: ProductCreatedAt
	): ProductModel {
		return new ProductModel(
			id,
			name,
			description,
			null,
			categoryId,
			price,
			quantity,
			state,
			createdAt
		);
	}

	static from(command: ProductCreateCommand): ProductModel {
		return this.create(
			ProductIdMother.create(command.id),
			ProductNameMother.create(command.name),
			ProductDescriptionMother.create(command.description),
			CategoryIdMother.create(command.categoryId),
			ProductPriceMother.create(command.price),
			ProductQuantityMother.create(command.quantity),
			ProductStateMother.create(command.state),
			ProductCreatedAtMother.create(command.createdAt)
		);
	}

	static random(): ProductModel {
		return this.create(
			ProductIdMother.random(),
			ProductNameMother.random(),
			ProductDescriptionMother.random(),
			CategoryIdMother.random(),
			ProductPriceMother.random(),
			ProductQuantityMother.random(),
			ProductStateMother.random(),
			ProductCreatedAtMother.random()
		);
	}
}
