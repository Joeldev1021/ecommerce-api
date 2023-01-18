import { ValueObject } from '../../../shared/domain/value-objects/value-object';
import { VOFormatException } from '../../../shared/domain/errors/vo-format.exception';
import { ROLES_USER } from '../../../shared/infrastruture/utils/roles';

export class UserRoleVO extends ValueObject<string> {
	public equals(valueObject: UserRoleVO): boolean {
		return valueObject.value === this.value;
	}

	protected assertIsValid(value: ROLES_USER): void {
		if (!Object.values(ROLES_USER).includes(value))
			throw new VOFormatException(UserRoleVO.name, value);
	}
}
