import { injectable } from 'inversify';
import { DataSource } from 'typeorm';
import { TypeOrmClientFactory } from '../../../../../src/Contexts/shared/infrastruture/persistance/typeorm-client-factory';
import { EnvironmentArranger } from '../arrarger/enviroment-arranger';

@injectable()
export class TypeOrmEnvironmentArranger implements EnvironmentArranger {
	async client(): Promise<DataSource> {
		await TypeOrmClientFactory.createConnection();
		return TypeOrmClientFactory.getConnection();
	}

	async arrange(): Promise<void> {
		await this.cleanDatabase();
	}

	async close(): Promise<void> {
		return (await this.client()).destroy();
	}

	async cleanDatabase(): Promise<void> {
		const client = await this.client();
		const entities = client.entityMetadatas;
		for (const entity of entities) {
			const repository = client.getRepository(entity.name);
			await repository.delete({});
		}
	}
}
