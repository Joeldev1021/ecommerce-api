import 'reflect-metadata';
import { container } from '../../../../../src/apps/mooc/backend/dependency-injection/container';
import { UserRepository } from '../../../../../src/Contexts/user/infrastructure/repositories/user.repository';
import { CONTAINER_TYPES } from '../../../../../src/apps/mooc/backend/dependency-injection/container.types';
import { IEnvironmentArranger } from '../../../shared/infrastructure/arrarger/enviroment-arranger';
import { TypeOrmClientFactory } from '../../../../../src/Contexts/shared/infrastruture/persistance/typeorm-client-factory';
import { UserModelMother } from '../../domain/user-model.mother';

const environmentArranger = container.get<IEnvironmentArranger>(
	CONTAINER_TYPES.envArranger
);

const repository = container.get<UserRepository>(
	CONTAINER_TYPES.userRepository
);

beforeAll(async () => {
	await TypeOrmClientFactory.createConnection();
});

beforeEach(async () => {
	await environmentArranger.arrange();
});

afterAll(async () => {
	await environmentArranger.close();
});

describe('User-Repository', () => {
	describe('#register', () => {
		it('should register a user', async () => {
			const user = await UserModelMother.random();
			await repository.register(user);
			const userRegister = await repository.findById(user.id);

			expect(userRegister).toEqual(user);
		});
	});
	describe('Find by Email', () => {
		it('should find a user', async () => {
			const user = await UserModelMother.random();
			await repository.register(user);
			const userRegister = await repository.findByEmail(user.email);

			expect(userRegister).toEqual(user);
		});
	});
});
