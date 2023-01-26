import { UserRepository } from './../../../../../Contexts/user/infrastructure/repositories/user.repository';
import { IUserRepository } from './../../../../../Contexts/user/domain/repositories/user.repository';
import { UserRegisterUseCase } from './../../../../../Contexts/user/application/register/user-register.usecase';
import { UserLoginController } from './../../controllers/user/user-login.controller';
import { CONTAINER_TYPES } from './../container.types';
import { UserRegisterController } from './../../controllers/user/user-register.controller';
import { container } from '../container';

container
	.bind<UserRegisterController>(CONTAINER_TYPES.userRegisterController)
	.to(UserRegisterController);

container
	.bind<UserLoginController>(CONTAINER_TYPES.userLoginController)
	.to(UserLoginController);

container
	.bind<UserRegisterUseCase>(CONTAINER_TYPES.userRegisterUseCase)
	.to(UserRegisterUseCase);

container
	.bind<IUserRepository>(CONTAINER_TYPES.userRepository)
	.to(UserRepository);
