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
	/**
	 * The constructor function is a function that is called when a new instance of a class is created
	 * @param {BrandId} id - The unique identifier for the brand.
	 * @param {BrandName} name - The name of the brand.
	 * @param {BrandDescription} description - BrandDescription
	 * @param logo - null,
	 * @param {string} slug - The slug is a unique identifier for the brand. It is used in the URL to
	 * identify the brand.
	 * @param {BrandState} state - BrandState
	 */
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
