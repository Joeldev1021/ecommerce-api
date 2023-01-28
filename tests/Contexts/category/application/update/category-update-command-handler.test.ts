import 'reflect-metadata';
import { CategoryModelMother } from './../../domain/category-model.mother';
import { CategoryUpdateCommand } from './../../../../../src/Contexts/category/domain/command/category-update-command';
import { CategoryUpdateUseCase } from './../../../../../src/Contexts/category/application/update/category-update.usecase';
import { CategoryUpdateCommandHandler } from './../../../../../src/Contexts/category/application/update/category-update-command-handler';
import { CategoryCreateCommand } from './../../../../../src/Contexts/category/domain/command/category-created.command';
import { CategoryCreateCommandMother } from './../create/category-create-command.mother';
import EventBusMock from '../../../shared/domain/__Mock__/event-bus-mock';
import { CategoryCreateCommandHandler } from './../../../../../src/Contexts/category/application/create/category-create-command-handler';
import { CategoryCreateUseCase } from './../../../../../src/Contexts/category/application/create/category-create.usecase';
import { CategoryRepositoryMock } from './../../__mocks__/category-repository.mock';

let repository: CategoryRepositoryMock;
let categoryCreateUseCase: CategoryCreateUseCase;
let categoryUpdateUseCase: CategoryUpdateUseCase;
let handler: CategoryCreateCommandHandler;
let handlerUpdate: CategoryUpdateCommandHandler;
let eventBus: EventBusMock;

beforeEach(() => {
	repository = new CategoryRepositoryMock();
	eventBus = new EventBusMock();
	categoryCreateUseCase = new CategoryCreateUseCase(repository, eventBus);
	handler = new CategoryCreateCommandHandler(categoryCreateUseCase);

	categoryUpdateUseCase = new CategoryUpdateUseCase(repository);
	handlerUpdate = new CategoryUpdateCommandHandler(categoryUpdateUseCase);
});

describe('CategoryUpdateCommandHandler', () => {
	let command: CategoryCreateCommand;
	beforeEach(async () => {
		command = CategoryCreateCommandMother.random();
		await handler.handle(command);
	});

	it('should update a category', async () => {
		const commandUpdate = {
			...command,
			name: 'updatecategory',
		} as CategoryUpdateCommand;
		const category = CategoryModelMother.from(commandUpdate);

		await handlerUpdate.handle(commandUpdate);

		repository.assertUpdateHaveBeenCalledWith(category);
	});
});
