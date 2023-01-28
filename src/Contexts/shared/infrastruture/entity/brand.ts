import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ProductEntity } from './product';

@Entity({ name: 'brand' })
export class BrandEntity {
	@PrimaryColumn()
	brandId: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	logo: string;

	@Column()
	slug: string;

	@Column()
	state: boolean;

	@OneToMany(() => ProductEntity, product => product.brandId)
	products: ProductEntity[];
}
