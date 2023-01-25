import 'reflect-metadata';
import EventBusMock from '../../shared/domain/__Mock__/event-bus-mock';
import { ProductRepositoryMock } from '../__mocks__/product-repository.mock';
import { ProductCreateUseCase } from '../../../../src/Contexts/product/application/create/product-create-usecase';
import { ProductCreateCommandHandler } from '../../../../src/Contexts/product/application/create/product-create-command-handler';
import { CategoryRepositoryMock } from '../../category/__mocks__/category-repository.mock';
import { ProductCreateCommandMother } from './product-create-command.mother';
import { ProductModelMother } from '../domain/product-model.mother';
import { CategoryModelMother } from '../../category/domain/category-model.mother';
import { CategoryIdNotFoundException } from '../../../../src/Contexts/product/application/errors/category-id-not-found.exception';

let repository: ProductRepositoryMock;
let productCreateUseCase: ProductCreateUseCase;
let categoryRepository: CategoryRepositoryMock;
let eventBus: EventBusMock;
let commandHandler: ProductCreateCommandHandler;

beforeEach(() => {
	repository = new ProductRepositoryMock();
	categoryRepository = new CategoryRepositoryMock();
	eventBus = new EventBusMock();
	productCreateUseCase = new ProductCreateUseCase(
		categoryRepository,
		repository
	);
	commandHandler = new ProductCreateCommandHandler(productCreateUseCase);
});

describe('ProductCreateCommandHandler', () => {
	it('should create a valid Product', async () => {
		const categoryRandom = CategoryModelMother.random();

		const productRandom = ProductCreateCommandMother.random();
		/* override category id  command  */
		const command = { ...productRandom, categoryId: categoryRandom.id.value };

		const product = ProductModelMother.from(command);

		/* save category random  */
		categoryRepository.returnOnFindById(categoryRandom);

		await commandHandler.handle(command);
		repository.assertSaveHaveBeenCalledWith(product);
	});

	it('should throw error if category Id not exist', async () => {
		const command = ProductCreateCommandMother.random();


		try {
			await commandHandler.handle(command);
		} catch (error) {
			expect(error).toBeInstanceOf(CategoryIdNotFoundException);
		}
	});
});
