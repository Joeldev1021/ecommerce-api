import { MotherCreator } from './mother-creator';

export class QuantityMother {
	static random(value?: number): number {
		return MotherCreator.random().datatype.number({
			max: value ? value : 5000,
		});
	}
}
