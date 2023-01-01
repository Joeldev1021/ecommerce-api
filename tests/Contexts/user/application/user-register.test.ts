import { UserRegisterUseCase } from '../../../../src/Contexts/user/application/usecase/user-register.usecase';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { UserModel } from '../../../../src/Contexts/user/domain/models/user.model';
import { StateVO } from '../../../../src/Contexts/shared/domain/value-objects/state.vo';
import { UserRepositoryMock } from '../__mocks__/user-repository.mock';

describe('UserRegister', () => {
	let userRepository: UserRepositoryMock;

	beforeEach(() => {
		userRepository = new UserRepositoryMock();
	});

	it('should register a valid user', async () => {
		const userRegisterUseCase = new UserRegisterUseCase(userRepository);
		const id = new UuidVO('e05ae3a3-22e8-4093-9c50-8e08af41f610');
		const name = new NameVO('example');
		const email = new EmailVO('example@gmail.com');
		const password = new PasswordVO('password');
		const state = new StateVO(true);
		const userExpected = new UserModel(id, name, email, password, state);

		await userRegisterUseCase.execute(id, name, email, password, state);
		userRepository.assertRegisterHaveBeenCalledWith(userExpected);
	});
});
