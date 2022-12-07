import { Router } from "express";
import { container } from "../../../container";

const router = Router();
const userRegisterController = container.resolve("userRegisterController");
router.post(
  "/register",
  userRegisterController.execute.bind(userRegisterController)
);

const userLoginController = container.resolve("userLoginController");

router.post("/login", userLoginController.execute.bind(userLoginController));

export const authRoutes = router;
