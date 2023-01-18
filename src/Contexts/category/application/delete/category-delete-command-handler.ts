import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { CategoryDeleteUseCase } from './category-delete.usecase';
import { CategoryDeleteCommand } from '../../domain/command/category-delete-command';
import { CategoryId } from '../../domain/value-objects/category-id.vo';

@injectable()
export class CategoryDeleteCommandHandler implements ICommandHandler<Command> {
	constructor(
		@inject(CONTAINER_TYPES.categoryCreateUseCase)
		private _categoryDeleteUseCase: CategoryDeleteUseCase
	) {}

	subscribeTo(): Command {
		return CategoryDeleteCommand;
	}

	async handle(command: CategoryDeleteCommand): Promise<void> {
		const { id } = command;

		await this._categoryDeleteUseCase.execute(new CategoryId(id));
	}
}
