import 'reflect-metadata';
import { CategoryIdMother } from './../../domain/category-id.mother';
import { CategoryCreateUseCase } from '../../../../../src/Contexts/category/application/create/category-create.usecase';
import { CategoryCreateCommandHandler } from '../../../../../src/Contexts/category/application/create/category-create-command-handler';
import { CategoryDeleteCommandHandler } from '../../../../../src/Contexts/category/application/delete/category-delete-command-handler';
import EventBusMock from '../../../shared/domain/__Mock__/event-bus-mock';
import { CategoryRepositoryMock } from '../../__mocks__/category-repository.mock';
import { CategoryDeleteCommandMother } from './category-delete-command.mother';
import { CategoryCreateCommandMother } from '../create/category-create-command.mother';
import { CategoryDeleteUseCase } from '../../../../../src/Contexts/category/application/delete/category-delete.usecase';

let repository: CategoryRepositoryMock;
let categoryCreateUseCase: CategoryCreateUseCase;
let categoryDeleteUseCase: CategoryDeleteUseCase;
let eventBus: EventBusMock;
let handler: CategoryCreateCommandHandler;
let handlerDelete: CategoryDeleteCommandHandler;

beforeEach(() => {
	repository = new CategoryRepositoryMock();
	eventBus = new EventBusMock();
	categoryCreateUseCase = new CategoryCreateUseCase(repository, eventBus);
	categoryDeleteUseCase = new CategoryDeleteUseCase(repository);

	handler = new CategoryCreateCommandHandler(categoryCreateUseCase);
	handlerDelete = new CategoryDeleteCommandHandler(categoryDeleteUseCase);
});

describe('CategoryCreateCommandHandler', () => {
	it('should delete a valid category', async () => {
		const categoryRandom = CategoryCreateCommandMother.random();
		const categoryCommand = CategoryDeleteCommandMother.fromPrimitives(
			categoryRandom.id
		);

		await handlerDelete.handle(categoryCommand);
		const categoryId = CategoryIdMother.create(categoryRandom.id);

		repository.assetDeleteHaveBeenCalledWith(categoryId);
	});
});
