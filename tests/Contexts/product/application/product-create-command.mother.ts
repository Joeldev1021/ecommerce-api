import { BrandId } from './../../../../src/Contexts/brand/domain/value-objects/brand-id.vo';
import { ProductCreateCommand } from '../../../../src/Contexts/product/domain/command/product-create.command';
import { ProductId } from '../../../../src/Contexts/product/domain/value-objects/product-id.vo';
import { ProductName } from '../../../../src/Contexts/product/domain/value-objects/product-name.vo';
import { ProductDesc } from '../../../../src/Contexts/product/domain/value-objects/product-description.vo';
import { ProductState } from '../../../../src/Contexts/product/domain/value-objects/product-state.vo';
import { CategoryId } from '../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { PriceVO } from '../../../../src/Contexts/shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../../src/Contexts/shared/domain/value-objects/quantity.vo';
import { ProductIdMother } from '../domain/product-id.mother';
import { ProductNameMother } from '../domain/product-name.mother';
import { ProductDescriptionMother } from '../domain/product-description.mother';
import { ProductStateMother } from '../domain/product-state.mother';
import { CategoryIdMother } from '../../category/domain/category-id.mother';
import { ProductPriceMother } from '../domain/product-price.mother';
import { ProductQuantityMother } from '../domain/product-quantity.mother';
import { ProductCreatedAt } from '../../../../src/Contexts/product/domain/value-objects/product-created-at.vo';
import { ProductCreatedAtMother } from '../domain/product-created-at.vo';
import { BrandIdMother } from '../../brand/domain/brand-id.vo';

export class ProductCreateCommandMother {
	static create(
		id: ProductId,
		name: ProductName,
		description: ProductDesc,
		categoryId: CategoryId,
		price: PriceVO,
		quantity: QuantityVO,
		state: ProductState,
		createdAt: ProductCreatedAt,
		brandId: BrandId
	): ProductCreateCommand {
		return {
			id: id.value,
			name: name.value,
			description: description.value,
			categoryId: categoryId.value,
			price: price.value,
			quantity: quantity.value,
			state: state.value,
			createdAt: createdAt.value,
			brandId: brandId.value,
		};
	}

	static random(): ProductCreateCommand {
		return this.create(
			ProductIdMother.random(),
			ProductNameMother.random(),
			ProductDescriptionMother.random(),
			CategoryIdMother.random(),
			ProductPriceMother.random(),
			ProductQuantityMother.random(),
			ProductStateMother.random(),
			ProductCreatedAtMother.random(),
			BrandIdMother.random()
		);
	}

	//todo error
	static invalid(): ProductCreateCommand {
		return {
			id: ProductIdMother.random().value,
			name: ProductNameMother.random().value,
			description: ProductDescriptionMother.random().value,
			categoryId: CategoryIdMother.random().value,
			price: ProductPriceMother.random().value,
			quantity: ProductQuantityMother.random().value,
			state: ProductStateMother.random().value,
			createdAt: ProductCreatedAtMother.random().value,
			brandId: BrandIdMother.random().value,
		};
	}
}
