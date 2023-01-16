import { CategoryState } from '../../../../src/Contexts/category/domain/value-objects/category-state.vo';
import { StateMother } from '../../shared/domain/state.mother';

export class CategoryStateMother {
	static create(value: boolean): CategoryState {
		return new CategoryState(value);
	}

	static random(): CategoryState {
		return this.create(StateMother.random());
	}
}
