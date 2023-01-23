import { ROLES_USER } from '../../../../src/Contexts/shared/infrastruture/utils/roles';
import { UserRoleVO } from '../../../../src/Contexts/user/domain/value-objects/user-role.vo';

export class UserRoleMother {
	static create(value: string): UserRoleVO {
		return new UserRoleVO(value);
	}

	static random(): UserRoleVO {
		return this.create(ROLES_USER.ADMIN);
	}
}
