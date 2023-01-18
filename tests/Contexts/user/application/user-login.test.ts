import { UserRepositoryMock } from '../__mocks__/user-repository.mock';
import { UserLoginUseCase } from '../../../../src/Contexts/user/application/usecase/user-login.usecase';
import { UserRequestMother } from './user-request.mother';
import { UserRegisterUseCase } from '../../../../src/Contexts/user/application/usecase/user-register.usecase';
import { IUserPrimitives } from '../../../../src/Contexts/user/domain/models/user.model';
import { InvalidLoginException } from '../../../../src/Contexts/user/application/errors/invalid-login.exception';
import { JwtService } from '../../../../src/Contexts/shared/infrastruture/services/jwt.service';

let repository: UserRepositoryMock;
let userLoginUseCase: UserLoginUseCase;
let userRegisterUseCase: UserRegisterUseCase;
let jwtService: JwtService;

beforeEach(() => {
	repository = new UserRepositoryMock();
	jwtService = new JwtService();
	userLoginUseCase = new UserLoginUseCase(repository, jwtService);
	userRegisterUseCase = new UserRegisterUseCase(repository);
});

let userRequest: IUserPrimitives;

beforeEach(async () => {
	userRequest = UserRequestMother.random();
	/* register user */
	await userRegisterUseCase.execute(
		userRequest.userId,
		userRequest.username,
		userRequest.email,
		userRequest.password,
		userRequest.state
	);
});

describe('User-Login', () => {
	it('should Login a valid user', async () => {
		/* login user */
		const token = await userLoginUseCase.execute(
			userRequest.email,
			userRequest.password
		);
		expect(token).toHaveProperty('token');
	});

	it('should login invalid password wrong', async () => {
		try {
			await userLoginUseCase.execute(userRequest.email, 'passwordWrong');
		} catch (error) {
			expect(error).toBeInstanceOf(InvalidLoginException);
		}
	});
});
