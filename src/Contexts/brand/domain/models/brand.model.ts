import { BrandDescription } from './../value-objects/brand-description.vo';
import { BrandName } from './../value-objects/brand-name.vo';
import { BrandId } from './../value-objects/brand-id.vo';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';
import { BrandState } from '../value-objects/brand-state.vo';

export interface IBrandPrimitives extends AggregateRootPrimitives {
	brandId: string;
	name: string;
	description: string;
	logo: string;
	slug: string;
	state: boolean;
}

export class BrandModel extends AggregateRoot {
	constructor(
		public readonly id: BrandId,
		public name: BrandName,
		public description: BrandDescription,
		public logo: null,
		public slug: string,
		public state: BrandState
	) {
		super();
	}

	static toDomain(brand: IBrandPrimitives): BrandModel {
		return new BrandModel(
			new BrandId(brand.brandId),
			new BrandName(brand.name),
			new BrandDescription(brand.description),
			null,
			'',
			new BrandState(brand.state)
		);
	}

	toPrimitives(): IBrandPrimitives {
		return {
			brandId: this.id.value,
			name: this.name.value,
			description: this.description.value,
			logo: '',
			slug: '',
			state: this.state.value,
		};
	}
}
