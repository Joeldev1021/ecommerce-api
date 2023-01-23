import { UserRegisterCommandHandler } from './../../../../../src/Contexts/user/application/register/user-register-command-handler';
import { UserRegisterCommandMother } from './user-register-command.mother';
import { UserRegisterUseCase } from './../../../../../src/Contexts/user/application/register/user-register.usecase';
import { UserModelMother } from '../../domain/user-model.mother';
import { UserRepositoryMock } from '../../__mocks__/user-repository.mock';
import { UserRequestMother } from '../user-request.mother';
import EventBusMock from '../../../shared/domain/__Mock__/event-bus-mock';

let repository: UserRepositoryMock;
let userRegisterUseCase: UserRegisterUseCase;
let evenbus: EventBusMock;
let commandHandler: UserRegisterCommandHandler;

beforeEach(() => {
	repository = new UserRepositoryMock();
	evenbus = new EventBusMock();
	userRegisterUseCase = new UserRegisterUseCase(repository);
	commandHandler = new UserRegisterCommandHandler(userRegisterUseCase);
});

describe('User-Register', () => {
	it('should register a valid user', async () => {
		const userCommand = UserRegisterCommandMother.random();

		const userModel = UserModelMother.from(userCommand);
		await commandHandler.handle(userCommand);

		const userFound = await repository.findByEmail(userModel.email);
		expect(userFound?.email).toEqual(userModel.email);
	});
});
