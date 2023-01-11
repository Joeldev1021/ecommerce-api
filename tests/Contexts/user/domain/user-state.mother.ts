import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { StateMother } from '../../shared/domain/state.mother';

export class UserStateMother {
	static create(value: boolean): StateVO {
		return new StateVO(value);
	}

	static random(): StateVO {
		return this.create(StateMother.random());
	}
}
