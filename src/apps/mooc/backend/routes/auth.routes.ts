import { UserLoginController } from '../controllers/user/user-login.controller';
import { UserRegisterController } from '../controllers/user/user-register.controller';
import { container } from 'tsyringe';
import { Router } from 'express';
import { CONTAINER_TYPE } from '../dependency-injection/container.types';

const router = Router();

const userRegisterController = container.resolve<UserRegisterController>(
	CONTAINER_TYPE.userRegisterController
);

router.post(
	'/register',
	userRegisterController.execute.bind(userRegisterController)
);

const userLoginController = container.resolve<UserLoginController>(
	CONTAINER_TYPE.userLoginController
);

router.post('/login', userLoginController.execute.bind(userLoginController));

export const authRoutes = router;
