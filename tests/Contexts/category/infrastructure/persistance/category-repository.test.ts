import 'reflect-metadata';
import { CONTAINER_TYPES } from '../../../../../src/apps/mooc/backend/dependency-injection/container.types';
import { container } from '../../../../../src/apps/mooc/backend/dependency-injection/container';
import { IEnvironmentArranger } from '../../../shared/infrastructure/arrarger/enviroment-arranger';
import { CategoryModelMother } from '../../domain/category-model.mother';
import { ICategoryRepository } from '../../../../../src/Contexts/category/domain/repositories/category.repository';

const environmentArranger = container.get<IEnvironmentArranger>(
	CONTAINER_TYPES.envArranger
);

const repository = container.get<ICategoryRepository>(
	CONTAINER_TYPES.categoryRepository
);

beforeEach(async () => {
	await environmentArranger.arrange();
});

afterAll(async () => {
	await environmentArranger.arrange();
	await environmentArranger.close();
});

describe('CategoryRepository', () => {
	describe('#create', () => {
		it('should create a category', async () => {
			const category = CategoryModelMother.random();
			await repository.create(category);
		});
		it('should delete a category', async () => {
			const category = CategoryModelMother.random();
			await repository.create(category);

			await repository.delete(category.id);
		});

		it('should find category for ID ', async () => {
			const category = CategoryModelMother.random();
			await repository.create(category);

			const categoryFound = await repository.findById(category.id);
			expect(category).toEqual(categoryFound);
		});
		it('should find all category', async () => {
			const categories = [
				CategoryModelMother.random(),
				CategoryModelMother.random(),
			];
			await Promise.all(
				categories.map(async category => await repository.create(category))
			);

			const categoryAll = await repository.findAll();

			expect(categories.length).toEqual(categoryAll?.length);
		});
		it('should find category for name', async () => {
			const category = CategoryModelMother.random();
			await repository.create(category);

			const categoryFound = await repository.findByName(category.name);
			expect(category).toEqual(categoryFound);
		});
	});
});
