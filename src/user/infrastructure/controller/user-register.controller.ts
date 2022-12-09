import { NextFunction, Request, Response } from "express";
import { UserRegisterUseCase } from "../../application/usecase/user-register.usecase";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { PasswordVO } from "../../domain/value-objects/password.vo";
import { UserRegisterDTO } from "../dtos/user-register.dto";
import { AuthRequest } from "../interface";

export class UserRegisterController {
  private _userRegisterUseCase;

  constructor(dependencies: { userRegisterUseCase: UserRegisterUseCase }) {
    this._userRegisterUseCase = dependencies.userRegisterUseCase;
  }

  async execute(
    req: AuthRequest<UserRegisterDTO>,
    res: Response,
    next: NextFunction
  ) {
    const { id, name, email, password } = req.body;
    try {
      const user = await this._userRegisterUseCase.execute(
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
