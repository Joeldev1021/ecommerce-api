import 'reflect-metadata';
import EventBusMock from '../../shared/domain/__Mock__/event-bus-mock';
import { ProductRepositoryMock } from '../__mocks__/product-repository.mock';
import { ProductCreateUseCase } from '../../../../src/Contexts/product/application/create/product-create-usecase';
import { ProductCreateCommandHandler } from '../../../../src/Contexts/product/application/create/product-create-command-handler';
import { CategoryRepositoryMock } from '../../category/__mocks__/category-repository.mock';
import { ProductCreateCommandMother } from './product-create-command.mother';
import { ProductModelMother } from '../domain/product-model.mother';

let repository: ProductRepositoryMock;
let productCreateUseCase: ProductCreateUseCase;
let categoryRepository: CategoryRepositoryMock;
let eventBus: EventBusMock;
let handler: ProductCreateCommandHandler;

beforeEach(() => {
	repository = new ProductRepositoryMock();
	eventBus = new EventBusMock();
	productCreateUseCase = new ProductCreateUseCase(
		repository,
		categoryRepository
	);
	handler = new ProductCreateCommandHandler(productCreateUseCase);
});

describe('ProductCreateCommandHandler', () => {
	it('should create a valid Product', async () => {
		const command = ProductCreateCommandMother.random();
		const product = ProductModelMother.from(command);

		await handler.handle(command);
		repository.assertSaveHaveBeenCalledWith(product);
	});
	it('should throw error if id invalid', async () => {
		//		expect(async () => {
		/* 			const command = ProductCreateCommandMother.invalid();
			const commandInvalid = {
				...command,
				id: '22',
			};
			const Product = ProductModelMother.from(commandInvalid);

			await handler.handle(command);

			repository.assertSaveHaveBeenCalledWith(Product);
	 */
		// }).toThrow(VOFormatException);
	});
});
