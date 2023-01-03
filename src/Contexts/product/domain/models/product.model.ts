import { CreatedAtVO } from '../../../shared/domain/value-objects/created-at.vo';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { NameVO } from '../../../shared/domain/value-objects/name.vo';
import { PriceVO } from '../value-objects/price.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { QuantityVO } from '../value-objects/quantity.vo';
import { IProduct } from '../../../shared/infrastruture/types/models/product.model';
import { ProductInterface } from '../../infrastructure/types/product.interface';

export class ProductModel {
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
	) {}

	static toDomain(product: IProduct): ProductModel {
		return new ProductModel(
			new UuidVO(product.product_id),
			new NameVO(product.name),
			new DescriptionVO(product.description),
			null,
			new UuidVO(product.categoryId),
			new PriceVO(product.price),
			new QuantityVO(product.quantity),
			new StateVO(product.state),
			new CreatedAtVO(product.createdAt)
		);
	}

	toPrimitives(): ProductInterface {
		return {
			product_id: this.id.value,
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
