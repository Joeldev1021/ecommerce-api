import { MotherCreator } from './mother-creator';

export class DescriptionMother {
	static random(): string {
		return MotherCreator.random().commerce.productDescription();
	}
}
