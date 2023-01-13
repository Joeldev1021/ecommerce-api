import { MotherCreator } from './mother-creator';

export class NameMother {
	static random(): string {
		return MotherCreator.random().commerce.department();
	}
}
