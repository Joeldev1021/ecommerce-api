import { IUserRepository } from '../../../../src/Contexts/user/domain/repositories/user.repository';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { UserModel } from '../../../../src/Contexts/user/domain/models/user.model';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';

export class UserRepositoryMock implements IUserRepository {
	private saveMock: jest.Mock;
	private userSave: UserModel;

	constructor() {
		this.saveMock = jest.fn();
	}

	async register(user: UserModel): Promise<void> {
		this.saveMock(user);
		this.userSave = user;
	}

	async findById(id: UuidVO): Promise<UserModel | null> {
		return this.saveMock(id);
	}

	async findByEmail(email: EmailVO): Promise<UserModel | null> {
		return this.userSave;
	}

	async login(user: UserModel): Promise<void> {}

	assertRegisterHaveBeenCalledWith(expected: UserModel): void {
		expect(this.saveMock).toHaveBeenCalledWith(expected);
	}
}
