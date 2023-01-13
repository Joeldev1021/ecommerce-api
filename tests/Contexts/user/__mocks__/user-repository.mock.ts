import { IUserRepository } from '../../../../src/Contexts/user/domain/repositories/user.repository';
import { EmailVO } from '../../../../src/Contexts/shared/domain/value-objects/email.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { UserModel } from '../../../../src/Contexts/user/domain/models/user.model';

export class UserRepositoryMock implements IUserRepository {
	private saveMock: jest.Mock;

	constructor() {
		this.saveMock = jest.fn();
	}

	async register(user: UserModel): Promise<void> {
		this.saveMock(user);
	}

	async findById(id: UuidVO): Promise<UserModel | null> {
		return this.saveMock(id);
	}

	async findByEmail(email: EmailVO): Promise<UserModel | null> {
		return this.saveMock(email);
	}

	async login(user: UserModel): Promise<void> {}

	assertRegisterHaveBeenCalledWith(expected: UserModel): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}
}
