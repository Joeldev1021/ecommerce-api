import { UsernameVO } from '../../../../src/Contexts/shared/domain/value-objects/username.vo';
import { NameMother } from '../../shared/domain/name.mother';

export class UserNameMother {
	static create(value: string): UsernameVO {
		return new UsernameVO(value);
	}

	static random(): UsernameVO {
		return this.create(NameMother.random());
	}
}
