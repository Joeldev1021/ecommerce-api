import 'reflect-metadata';
import { VOFormatException } from '../../../../../src/Contexts/shared/domain/errors/vo-format.exception';
import { CategoryCreateUseCase } from '../../../../../src/Contexts/category/application/create/category-create.usecase';
import { CategoryCreateCommandHandler } from '../../../../../src/Contexts/category/application/create/category-create-command-handler';
import EventBusMock from '../../../shared/domain/__Mock__/event-bus-mock';
import { CategoryCreatedEventMother } from '../../domain/category-created-domain-event.mother';
import { CategoryModelMother } from '../../domain/category-model.mother';
import { CategoryRepositoryMock } from '../../__mocks__/category-repository.mock';
import { CategoryCreateCommandMother } from './category-create-command.mother';

let repository: CategoryRepositoryMock;
let categoryCreateUseCase: CategoryCreateUseCase;
let eventBus: EventBusMock;
let handler: CategoryCreateCommandHandler;

beforeEach(() => {
	repository = new CategoryRepositoryMock();
	eventBus = new EventBusMock();
	categoryCreateUseCase = new CategoryCreateUseCase(repository, eventBus);
	handler = new CategoryCreateCommandHandler(categoryCreateUseCase);
});

describe('CategoryCreateCommandHandler', () => {
	it('should create a valid category', async () => {
		const command = CategoryCreateCommandMother.random();
		const category = CategoryModelMother.from(command);
		const domainEvent = CategoryCreatedEventMother.fromCategory(category);
		await handler.handle(command);


		repository.assertSaveHaveBeenCalledWith(category);
		eventBus.assertLastPublishedEventIs(domainEvent);
	});
	it('should throw error if id invalid', async () => {
			const command = CategoryCreateCommandMother.invalid();
			const commandInvalid = {
				...command,
				id: '22',
			};
    try {
  
			await handler.handle(commandInvalid);
    } catch (error) {
     expect(error).toBeInstanceOf(VOFormatException)
    }

	});
});
