import { CreatedAtVO } from '../../../shared/domain/value-objects/created-at.vo';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { PriceVO } from '../value-objects/price.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { QuantityVO } from '../value-objects/quantity.vo';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';
export interface IProductPrimitives extends AggregateRootPrimitives {
	product_id: string;
	name: string;
	description: string;
	imageUrl?: string;
	price: number;
	quantity: number;
	createdAt: Date;
	state: boolean;
	category_id: string;
}

export class ProductModel extends AggregateRoot {
	constructor(
		public readonly id: UuidVO,
		public name: NameVO,
		public description: DescriptionVO,
		public imageUrl: null,
		public categoryId: UuidVO,
		public price: PriceVO,
		public quantity: QuantityVO,
		public state: StateVO,
		public createdAt: CreatedAtVO
	) {
		super();
	}

	static toDomain(product: IProductPrimitives): ProductModel {
		return new ProductModel(
			new UuidVO(product.product_id),
			new NameVO(product.name),
			new DescriptionVO(product.description),
			null,
			new UuidVO(product.category_id),
			new PriceVO(product.price),
			new QuantityVO(product.quantity),
			new StateVO(product.state),
			new CreatedAtVO(product.createdAt)
		);
	}

	toPrimitives(): IProductPrimitives {
		return {
			product_id: this.id.value,
			name: this.name.value,
			description: this.description.value,
			imageUrl: '',
			category_id: this.categoryId.value,
			price: this.price.value,
			quantity: this.quantity.value,
			state: this.state.value,
			createdAt: this.createdAt.value,
		};
	}
}
