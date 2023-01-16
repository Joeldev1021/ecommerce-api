import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { ProductDeleteCommand } from '../../domain/command/product-delete-command';
import { ProductId } from '../../domain/value-objects/product-id.vo';
import { ProductDeleteUseCase } from './product-delete.usecase';

@injectable()
export class ProductDeleteCommandHandler
	implements ICommandHandler<ProductDeleteCommand>
{
	constructor(
		@inject(CONTAINER_TYPES.productDeleteUseCase)
		private _productDeleteUseCase: ProductDeleteUseCase
	) {}

	subscribeTo(): Command {
		return ProductDeleteCommand;
	}

	async handle(command: ProductDeleteCommand): Promise<void> {
		await this._productDeleteUseCase.execute(new ProductId(command.id));
	}
}
