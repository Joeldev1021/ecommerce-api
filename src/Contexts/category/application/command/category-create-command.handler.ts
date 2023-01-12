import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { DescriptionVO } from '../../../shared/domain/value-objects/description.vo';
import { UsernameVO } from '../../../shared/domain/value-objects/username.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { CategoryCreateCommand } from '../../domain/command/category-created.command';
import { CategoryCreateUseCase } from '../usecase/category-create.usecase';

@injectable()
export class CategoryCreateCommandHandler implements ICommandHandler<Command> {
	constructor(
		@inject(CONTAINER_TYPES.categoryCreateUseCase)
		private _categoryCreateUseCase: CategoryCreateUseCase
	) {}

	subscribeTo(): Command {
		return CategoryCreateCommand;
	}

	async handle(command: CategoryCreateCommand): Promise<void> {
		console.log('command handler');
		await this._categoryCreateUseCase.execute(
			new UuidVO(command.id),
			new UsernameVO(command.name),
			new DescriptionVO(command.description),
			new StateVO(command.state)
		);
	}
}
