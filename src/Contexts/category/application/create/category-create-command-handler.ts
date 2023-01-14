import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { CategoryCreateCommand } from '../../domain/command/category-created.command';
import { CategoryCreateUseCase } from './category-create.usecase';
import { CategoryId } from '../../domain/value-objects/category-id.vo';
import { CategoryName } from '../../domain/value-objects/category-name.vo';
import { CategoryDesc } from '../../domain/value-objects/category-description.vo';
import { CategoryState } from '../../domain/value-objects/category-state.vo';

@injectable()
export class CategoryCreateCommandHandler
	implements ICommandHandler<CategoryCreateCommand>
{
	constructor(
		@inject(CONTAINER_TYPES.categoryCreateUseCase)
		private _categoryCreateUseCase: CategoryCreateUseCase
	) {}

	subscribeTo(): Command {
		return CategoryCreateCommand;
	}

	async handle(command: CategoryCreateCommand): Promise<void> {
		await this._categoryCreateUseCase.execute(
			new CategoryId(command.id),
			new CategoryName(command.name),
			new CategoryDesc(command.description),
			new CategoryState(command.state)
		);
	}
}
