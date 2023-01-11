import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../domain/aggregate-root';

import { Repository, ObjectType } from 'typeorm';
import { TypeOrmClientFactory } from './typeorm-client-factory';
import { injectable } from 'inversify';

@injectable()
export abstract class TypeOrmRepository<
	T extends AggregateRoot,
	P extends AggregateRootPrimitives
> {
	protected abstract entitySchema(): ObjectType<P>;

	protected async repository(): Promise<Repository<P>> {
		const dataSource = await TypeOrmClientFactory.getConnection();
		return dataSource.getRepository(this.entitySchema());
	}

	protected async persist(aggregateRoot: T): Promise<void> {
		const repository = await this.repository();
		await repository.save(aggregateRoot.toPrimitives());
	}
}

/* @injectable()
export abstract class TypeOrmRepository<
	T extends AggregateRoot,
	P extends AggregateRootPrimitives
> {
	protected abstract entitySchema(): EntitySchema<P>;

	protected async repository(): Promise<Repository<P>> {
		const dataSource = await TypeOrmClientFactory.getConnection();
		return dataSource.getRepository(this.entitySchema());
	}

	protected async persist(aggregateRoot: T): Promise<void> {
		const repository = await this.repository();
		await repository.save(aggregateRoot.toPrimitives());
	}
}
 */
