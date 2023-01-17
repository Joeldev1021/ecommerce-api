import { UserRepositoryMock } from '../__mocks__/user-repository.mock';
import { UserLoginUseCase } from '../../../../src/Contexts/user/application/usecase/user-login.usecase';
import { UserRequestMother } from './user-request.mother';
import { UserModelMother } from '../domain/user-model.mother';
import { UserRegisterUseCase } from '../../../../src/Contexts/user/application/usecase/user-register.usecase';

let repository: UserRepositoryMock;
let userLoginUseCase: UserLoginUseCase;
let userRegisterUseCase: UserRegisterUseCase;

beforeEach(() => {
	repository = new UserRepositoryMock();
	userLoginUseCase = new UserLoginUseCase(repository);
	userRegisterUseCase = new UserRegisterUseCase(repository);
});

describe('User-Login', () => {
	it('should Login a valid user', async () => {
		const userRequest = UserRequestMother.random();

		const userModel = UserModelMother.fromRequest(userRequest);

		/* register user */
		await userRegisterUseCase.execute(
			userRequest.userId,
			userRequest.username,
			userRequest.email,
			userRequest.password,
			userRequest.state
		);

		/* login user */
		await userLoginUseCase.execute(userRequest.username, userRequest.email);

		const userFound = await repository.findByEmail(userModel.email);

		expect(userFound?.email).toEqual(userModel.email);
	});
});
