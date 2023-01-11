import { MotherCreator } from './mother-creator';

export class StateMother {
	static random(): boolean {
		return MotherCreator.random().datatype.boolean();
	}
}
