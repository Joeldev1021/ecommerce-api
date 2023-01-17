import { UserRegisterUseCase } from '../../../../src/Contexts/user/application/usecase/user-register.usecase';
import { UserModelMother } from '../domain/user-model.mother';
import { UserRepositoryMock } from '../__mocks__/user-repository.mock';
import { UserRequestMother } from './user-request.mother';

let repository: UserRepositoryMock;
let userRegisterUseCase: UserRegisterUseCase;

beforeEach(() => {
	repository = new UserRepositoryMock();
	userRegisterUseCase = new UserRegisterUseCase(repository);
});

describe('User-Register', () => {
	it('should register a valid user', async () => {
		const userRequest = UserRequestMother.random();

		const userModel = UserModelMother.fromRequest(userRequest);

		await userRegisterUseCase.execute(
			userRequest.userId,
			userRequest.username,
			userRequest.email,
			userRequest.password,
			userRequest.state
		);

		const userFound = await repository.findByEmail(userModel.email);
		expect(userFound?.email).toEqual(userModel.email);
	});
});
