import 'reflect-metadata';
import { UserLoginQueryMother } from './user-login-command.mother';
import { UserLoginQueryHandler } from './../../../../../src/Contexts/user/application/login/user-login-query-handler';
import { UserRepositoryMock } from '../../__mocks__/user-repository.mock';
import { UserRegisterUseCase } from '../../../../../src/Contexts/user/application/register/user-register.usecase';
import { JwtService } from '../../../../../src/Contexts/shared/infrastruture/services/jwt.service';
import { UserRegisterCommandMother } from '../register/user-register-command.mother';
import { UserRegisterCommand } from '../../../../../src/Contexts/user/domain/command/user-register-command';
import { UserRegisterCommandHandler } from '../../../../../src/Contexts/user/application/register/user-register-command-handler';

let repository: UserRepositoryMock;
let userRegister: UserRegisterCommand;
let userLoginQueryHandler: UserLoginQueryHandler;
let jwtService: JwtService;

beforeEach(() => {
	repository = new UserRepositoryMock();
	jwtService = new JwtService();
	userLoginQueryHandler = new UserLoginQueryHandler(repository, jwtService);
});

beforeEach(async () => {
	const userRegisterUseCase = new UserRegisterUseCase(repository);
	const commandHandler = new UserRegisterCommandHandler(userRegisterUseCase);

	userRegister = UserRegisterCommandMother.random();
	await commandHandler.handle(userRegister);
});

describe('User-Login', () => {
	it('should Login a valid user', async () => {
		/* login user */
		const query = UserLoginQueryMother.fromPrimitives(
			userRegister.email,
			userRegister.password
		);

		const response = await userLoginQueryHandler.handle(query);
		expect(response).toHaveProperty('token');
	});
});
