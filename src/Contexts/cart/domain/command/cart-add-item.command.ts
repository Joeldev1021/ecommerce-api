import { Command } from '../../../shared/domain/command';

export interface ICartProducts {
	id: string;
	cartId: string;
	productId: string;
	quantity: number;
	price: number;
}

export class CartAddItemCommand extends Command {
	constructor(readonly cartProducts: ICartProducts[]) {
		super();
	}
}
