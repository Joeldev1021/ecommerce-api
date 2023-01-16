import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../../shared/domain/command';
import { ICommandHandler } from '../../../shared/domain/interface/command-handler';
import { ProductCreateCommand } from '../../domain/command/product-create.command';
import { ProductCreateUseCase } from './product-create-usecase';
import { PriceVO } from '../../../shared/domain/value-objects/price.vo';
import { QuantityVO } from '../../../shared/domain/value-objects/quantity.vo';
import { ProductId } from '../../domain/value-objects/product-id.vo';
import { ProductName } from '../../domain/value-objects/product-name.vo';
import { ProductDesc } from '../../domain/value-objects/product-description.vo';
import { CategoryId } from '../../../category/domain/value-objects/category-id.vo';
import { ProductState } from '../../domain/value-objects/product-state.vo';
import { ProductCreatedAt } from '../../domain/value-objects/product-created-at.vo';

@injectable()
export class ProductCreateCommandHandler
	implements ICommandHandler<ProductCreateCommand>
{
	constructor(
		@inject(CONTAINER_TYPES.productCreateUseCase)
		private _productCreateUseCase: ProductCreateUseCase
	) {}

	subscribeTo(): Command {
		return ProductCreateCommand;
	}

	async handle(command: ProductCreateCommand): Promise<void> {
		await this._productCreateUseCase.execute(
			new ProductId(command.id),
			new ProductName(command.name),
			new ProductDesc(command.description),
			new CategoryId(command.categoryId),
			new PriceVO(command.price),
			new QuantityVO(command.quantity),
			new ProductState(command.state),
			new ProductCreatedAt(command.createdAt)
		);
	}
}
