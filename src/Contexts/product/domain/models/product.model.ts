import { CreatedAtVO } from '../../../shared/domain/value-objects/created-at.vo';
import { PriceVO } from '../../../shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../shared/domain/value-objects/quantity.vo';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';
import { ProductId } from '../value-objects/product-id.vo';
import { CategoryId } from '../../../category/domain/value-objects/category-id.vo';
import { ProductName } from '../value-objects/product-name.vo';
import { ProductDesc } from '../value-objects/product-description.vo';
import { ProductState } from '../value-objects/product-state.vo';
import { ProductCreatedAt } from '../value-objects/product-created-at.vo';
export interface IProductPrimitives extends AggregateRootPrimitives {
	productId: string;
	name: string;
	description: string;
	imageUrl?: string;
	price: number;
	quantity: number;
	createdAt: Date;
	state: boolean;
	categoryId: string;
}

export class ProductModel extends AggregateRoot {
	constructor(
		public readonly id: ProductId,
		public name: ProductName,
		public description: ProductDesc,
		public imageUrl: null,
		public categoryId: CategoryId,
		public price: PriceVO,
		public quantity: QuantityVO,
		public state: ProductState,
		public createdAt: ProductCreatedAt
	) {
		super();
	}

	static toDomain(product: IProductPrimitives): ProductModel {
		return new ProductModel(
			new ProductId(product.productId),
			new ProductName(product.name),
			new ProductDesc(product.description),
			null,
			new CategoryId(product.categoryId),
			new PriceVO(product.price),
			new QuantityVO(product.quantity),
			new ProductState(product.state),
			new CreatedAtVO(product.createdAt)
		);
	}

	toPrimitives(): IProductPrimitives {
		return {
			productId: this.id.value,
			name: this.name.value,
			description: this.description.value,
			imageUrl: '',
			categoryId: this.categoryId.value,
			price: this.price.value,
			quantity: this.quantity.value,
			state: this.state.value,
			createdAt: this.createdAt.value,
		};
	}
}
