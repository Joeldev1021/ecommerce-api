import { Router } from "express";
import { container } from "../../../container";
import { containerTypes } from "../../../container.types";
import { UserRegisterController } from "../controller/user-register.controller";

const router = Router();

const userRegisterController = container.resolve<UserRegisterController>(
  containerTypes.userRegisterController
);

router.post(
  "/register",
  userRegisterController.execute.bind(userRegisterController)
);

//const userLoginController = container.resolve("userLoginController");

//router.post("/login", userLoginController.execute.bind(userLoginController));

export const authRoutes = router;
