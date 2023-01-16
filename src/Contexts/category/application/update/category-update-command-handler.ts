import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { CategoryUpdateUseCase } from './category-update.usecase';
import { CategoryUpdateCommand } from '../../domain/command/category-update-command';
import { CategoryId } from '../../domain/value-objects/category-id.vo';
import { CategoryName } from '../../domain/value-objects/category-name.vo';
import { CategoryDesc } from '../../domain/value-objects/category-description.vo';
import { CategoryState } from '../../domain/value-objects/category-state.vo';

@injectable()
export class CategoryUpdateCommandHandler implements ICommandHandler<Command> {
	constructor(
		@inject(CONTAINER_TYPES.categoryUpdateUseCase)
		private _categoryUpdateUseCase: CategoryUpdateUseCase
	) {}

	subscribeTo(): Command {
		return CategoryUpdateCommand;
	}

	async handle(command: CategoryUpdateCommand): Promise<void> {
		await this._categoryUpdateUseCase.execute(
			new CategoryId(command.id),
			new CategoryName(command.name),
			new CategoryDesc(command.description),
			new CategoryState(command.state)
		);
	}
}
