import { NextFunction, Request, Response } from "express";
import userLoginUsecase from "../../application/usecase/user-login.usecase";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { User } from "../../../shared/infrastruture/models/user";
import { PasswordVO } from "../../domain/value-objects/password.vo";

class UserLoginController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, email, password } = req.body;
    try {
      const user = await userLoginUsecase.execute(
        new UuidVO(id),
        new EmailVO(email),
        new PasswordVO(password)
      );
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserLoginController();
