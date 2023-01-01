import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { UserModel } from '../../../../src/Contexts/user/domain/models/user.model';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { UserRepositoryMock } from '../__mocks__/user-repository.mock';

describe('UserRepository ', () => {
	it('should register a user', async () => {
		const repository = new UserRepositoryMock();
		const id = new UuidVO('e05ae3a3-22e8-4093-9c50-8e08af41f610');
		const expectedUser = new UserModel(
			id,
			new NameVO('example'),
			new EmailVO('example@gmail.com'),
			new PasswordVO('password'),
			new StateVO(true)
		);
		await repository.register(expectedUser);
		const user = await repository.findById(id);
		expect(user).toEqual(expectedUser);
	});
});
