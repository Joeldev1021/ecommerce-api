import { TypeOrmClientFactory } from '../../../../../../src/Contexts/shared/infrastruture/persistance/typeorm-client-factory';

export class RabbitMQTypeOrmClientMother {
	static async create(): Promise<void> {
		return await TypeOrmClientFactory.createConnection();
		/* return MongoClientFactory.createClient('shared', {
			url: 'mongodb://localhost:27017/mooc-backend-test1',
		}); */
	}
}
