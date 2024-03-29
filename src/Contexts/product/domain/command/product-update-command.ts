import { Command } from '../../../shared/domain/command';

export class ProductUpdateCommand implements Command {
	constructor(
		readonly id: string,
		readonly name: string,
		readonly description: string,
		readonly categoryId: string,
		readonly price: number,
		readonly quantity: number,
		readonly state: boolean,
		readonly brandId: string
	) {}
}
