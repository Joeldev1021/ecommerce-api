import 'reflect-metadata';
import { ICategoryRepository } from '../../../../../src/Contexts/category/domain/repositories/category.repository';
import { CONTAINER_TYPES } from '../../../../../src/apps/mooc/backend/dependency-injection/container.types';
import { container } from '../../../../../src/apps/mooc/backend/dependency-injection/container';
import { IEnvironmentArranger } from '../../../shared/infrastructure/arrarger/enviroment-arranger';
import { CategoryModelMother } from '../../domain/category-model.mother';

const repository = container.get<ICategoryRepository>(
	CONTAINER_TYPES.categoryRepository
);

const environmentArranger = container.get<IEnvironmentArranger>(
	CONTAINER_TYPES.envArranger
);

beforeEach(async () => {
	await environmentArranger.arrange();
});

afterAll(async () => {
	await environmentArranger.arrange();
	await environmentArranger.close();
});

describe('CategoryReposiotry', () => {
	describe('#create', () => {
		it('should create a category', async () => {
			const category = CategoryModelMother.random();
			await repository.create(category);
		});
	});
});
