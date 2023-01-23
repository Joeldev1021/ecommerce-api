import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { PriceVO } from '../../../shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../shared/domain/value-objects/quantity.vo';
import { StateVO } from '../../../shared/domain/value-objects/state.vo';
import { ProductUpdateCommand } from '../../domain/command/product-update-command';
import { ProductDesc } from '../../domain/value-objects/product-description.vo';
import { ProductId } from '../../domain/value-objects/product-id.vo';
import { ProductName } from '../../domain/value-objects/product-name.vo';
import { ProductUpdateUseCase } from './product-update.usecase';

@injectable()
export class ProductUpdateCommandHandler
	implements ICommandHandler<ProductUpdateCommand>
{
	constructor(
		@inject(CONTAINER_TYPES.productUpdateUseCase)
		private _productUpdateUseCase: ProductUpdateUseCase
	) {}

	subscribeTo(): Command {
		return ProductUpdateCommand;
	}

	async handle(command: ProductUpdateCommand): Promise<void> {
		await this._productUpdateUseCase.execute(
			new ProductId(command.id),
			new ProductName(command.name),
			new ProductDesc(command.description),
			new ProductId(command.categoryId),
			new PriceVO(command.price),
			new QuantityVO(command.quantity),
			new StateVO(command.state)
		);
	}
}
