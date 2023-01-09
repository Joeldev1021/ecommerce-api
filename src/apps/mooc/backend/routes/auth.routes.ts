import { UserLoginController } from '../controllers/user/user-login.controller';
import { UserRegisterController } from '../controllers/user/user-register.controller';
import { Router } from 'express';
import { CONTAINER_TYPES } from '../dependency-injection/container.types';
import { container } from '../dependency-injection/container';

const router = Router();

const userRegisterController = container.get<UserRegisterController>(
	CONTAINER_TYPES.userRegisterController
);

router.post(
	'/register',
	userRegisterController.execute.bind(userRegisterController)
);

const userLoginController = container.get<UserLoginController>(
	CONTAINER_TYPES.userLoginController
);

router.post('/login', userLoginController.execute.bind(userLoginController));

export const authRoutes = router;
