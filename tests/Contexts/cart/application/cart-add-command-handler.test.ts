import 'reflect-metadata';
import { CartAddItemCommandMother } from './cart-add-command.mother';
import { CartAddItemCommandHandler } from './../../../../src/Contexts/cart/application/cart-add-item/cart-add-item.command-handler';
import { CartAddItemUseCase } from './../../../../src/Contexts/cart/application/cart-add-item/cart-add-item.usecase';

//let repository: CategoryRepositoryMock;
let cartAddItemUseCase: CartAddItemUseCase;
let handler: CartAddItemCommandHandler;

beforeEach(() => {
	cartAddItemUseCase = new CartAddItemUseCase();
	handler = new CartAddItemCommandHandler(cartAddItemUseCase);
});

describe('CategoryCreateCommandHandler', () => {
	it('should create a valid category', async () => {
		const command = CartAddItemCommandMother.random();
		//const category = CategoryModelMother.from(command);
		await handler.handle(command);
	});
});
