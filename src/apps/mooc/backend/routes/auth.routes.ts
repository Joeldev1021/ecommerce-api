import { UserLoginController } from '../controllers/user/user-login.controller';
import { UserRegisterController } from '../controllers/user/user-register.controller';
import { container } from 'tsyringe';
import { Router } from 'express';
import { containerTypes } from '../dependency-injection/container.types';

const router = Router();

const userRegisterController = container.resolve<UserRegisterController>(
	containerTypes.userRegisterController
);

router.post(
	'/register',
	userRegisterController.execute.bind(userRegisterController)
);

const userLoginController = container.resolve<UserLoginController>(
	containerTypes.userLoginController
);

router.post('/login', userLoginController.execute.bind(userLoginController));

export const authRoutes = router;
