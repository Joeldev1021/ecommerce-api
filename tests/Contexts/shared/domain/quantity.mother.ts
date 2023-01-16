import { MotherCreator } from './mother-creator';

export class QuantityMother {
	static random(): number {
		return MotherCreator.random().datatype.number({ max: 5000 });
	}
}
