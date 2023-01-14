import { Command } from '../../../shared/domain/command';

export class ProductCreateCommand implements Command {
	constructor(
		readonly id: string,
		readonly name: string,
		readonly description: string,
		readonly productId: string,
		readonly price: number,
		readonly quantity: number,
		readonly state: boolean
	) {}
}
