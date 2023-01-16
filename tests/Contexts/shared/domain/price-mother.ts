import { MotherCreator } from './mother-creator';

export class PriceMother {
	static random(): string {
		return MotherCreator.random().commerce.price();
	}
}
