import { CategoryIdMother } from './../../domain/category-id.mother';
import 'reflect-metadata';
import { CategoryCreateUseCase } from '../../../../../src/Contexts/category/application/create/category-create.usecase';
import { CategoryCreateCommandHandler } from '../../../../../src/Contexts/category/application/create/category-create-command-handler';
import { CategoryDeleteCommandHandler } from '../../../../../src/Contexts/category/application/delete/category-delete-command-handler';

import EventBusMock from '../../../shared/domain/__Mock__/event-bus-mock';
import { CategoryRepositoryMock } from '../../__mocks__/category-repository.mock';
import { CategoryDeleteCommandMother } from './category-delete-command.mother';
import { CategoryCreateCommandMother } from '../create/category-create-command.mother';
import { CategoryCreateCommand } from '../../../../../src/Contexts/category/domain/command/category-created.command';
import { CategoryDeleteUseCase } from '../../../../../src/Contexts/category/application/delete/category-delete.usecase';
import { CategoryId } from '../../../../../src/Contexts/category/domain/value-objects/category-id.vo';

let repository: CategoryRepositoryMock;
let categoryCreateUseCase: CategoryCreateUseCase;
let categoryDeleteUseCase: CategoryDeleteUseCase;
let eventBus: EventBusMock;
let handler: CategoryCreateCommandHandler;
let handlerDelete: CategoryDeleteCommandHandler;
let categoryRandom: CategoryCreateCommand;

beforeEach(() => {
	repository = new CategoryRepositoryMock();
	eventBus = new EventBusMock();
	categoryCreateUseCase = new CategoryCreateUseCase(repository, eventBus);
	categoryDeleteUseCase = new CategoryDeleteUseCase(repository);

	handler = new CategoryCreateCommandHandler(categoryCreateUseCase);
	handlerDelete = new CategoryDeleteCommandHandler(categoryDeleteUseCase);
});

describe('CategoryCreateCommandHandler', () => {
	beforeEach(async () => {
		categoryRandom = CategoryCreateCommandMother.random();
		await handler.handle(categoryRandom);
	});

	it('should delete a valid category', async () => {
		const categoryCommand = CategoryDeleteCommandMother.fromPrimitives(
			categoryRandom.id
		);
		await handlerDelete.handle(categoryCommand);
		const categoryId = CategoryIdMother.create(categoryRandom.id);

		repository.assetDeleteHaveBeenCalledWith(categoryId);
	});
});
