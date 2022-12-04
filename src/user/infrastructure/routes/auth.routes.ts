import { Router } from "express";
import userLoginController from "../controller/user-login.controller";
import userRegisterController from "../controller/user-register.controller";

const router = Router();

router.post("/register", userRegisterController.execute);
router.post("/login", userLoginController.execute);

export const authRoutes = router;
