import { NextFunction, Request, Response } from "express";
import userRegisterUsecase from "../../application/usecase/user-register.usecase";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { PasswordVO } from "../../domain/value-objects/password.vo";

class UserRegisterController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, email, password } = req.body;
    try {
      const user = await userRegisterUsecase.execute(
        new UuidVO(id),
        new NameVO(name),
        new EmailVO(email),
        new PasswordVO(password)
      );

      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserRegisterController();
