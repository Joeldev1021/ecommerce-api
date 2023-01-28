import { BrandName } from './../../domain/value-objects/brand-name.vo';
import { injectable } from 'inversify';
import { ObjectType } from 'typeorm';
import { BrandEntity } from '../../../shared/infrastruture/entity/brand';
import { TypeOrmRepository } from '../../../shared/infrastruture/persistance/typeorm-repository';
import { BrandModel, IBrandPrimitives } from '../../domain/models/brand.model';
import { IBrandRepository } from '../../domain/repository/brand.repository';

@injectable()
export class BrandRepository
	extends TypeOrmRepository<BrandModel, IBrandPrimitives>
	implements IBrandRepository
{
	entitySchema(): ObjectType<BrandModel> {
		return BrandEntity;
	}

	async findByName(brandName: BrandName): Promise<BrandModel | null> {
		const repository = await this.repository();
		const brand = await repository.findOneBy({ name: brandName.value });
		if (!brand) return null;
		return BrandModel.toDomain(brand);
	}

	async create(brand: BrandModel): Promise<void> {
		const repository = await this.repository();
		await repository.create(brand.toPrimitives());
	}
}
