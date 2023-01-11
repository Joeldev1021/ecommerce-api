import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { UuidMother } from '../../shared/domain/uuid.mother';

export class UserIdMother {
	static create(value: string): UuidVO {
		return new UuidVO(value);
	}

	static random(): UuidVO {
		return this.create(UuidMother.random());
	}
}
