import { MotherCreator } from './mother-creator';

export class NameProductMother {
	static random(): string {
		return MotherCreator.random().commerce.product();
	}
}
