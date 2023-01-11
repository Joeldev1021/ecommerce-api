import { VOFormatException } from '../../../../src/Contexts/shared/domain/errors/vo-format.exception';
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
			userRequest.user_id,
			userRequest.name,
			userRequest.email,
			userRequest.password,
			userRequest.state
		);
		repository.assertRegisterHaveBeenCalledWith(userModel);
	});
	it('should throw error if course name length is < 1', async () => {
		expect(() => {
			const request = UserRequestMother.random();
			const user = {
				...request,
				name: 'a',
			};

			UserModelMother.fromRequest(user);
		}).toThrow(VOFormatException);
	});
	it('should throw error if password length is < 4', async () => {
		expect(() => {
			const request = UserRequestMother.random();
			const user = {
				...request,
				password: 'a92',
			};

			UserModelMother.fromRequest(user);
		}).toThrow(VOFormatException);
	});

	it('should throw error if EMAIL is invalid', async () => {
		expect(() => {
			const request = UserRequestMother.random();
			const user = {
				...request,
				email: 'error',
			};

			UserModelMother.fromRequest(user);
		}).toThrow(VOFormatException);
	});

	it('should throw error if ID is invalid', async () => {
		expect(() => {
			const request = UserRequestMother.random();
			const user = {
				...request,
				user_id: '130',
			};

			UserModelMother.fromRequest(user);
		}).toThrow(VOFormatException);
	});
});
