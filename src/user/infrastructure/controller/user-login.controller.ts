import { NextFunction, Request, Response } from "express";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { UserLoginUseCase } from "../../application/usecase/user-login.usecase";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { PasswordVO } from "../../domain/value-objects/password.vo";
import { AuthRequest } from "../interface";
import { UserLoginDTO } from "../dtos/user-login.dto";

export class UserLoginController {
  private _userLoginUseCase;

  constructor(dependencies: { userLoginUseCase: UserLoginUseCase }) {
    this._userLoginUseCase = dependencies.userLoginUseCase;
  }

  async execute(
    req: AuthRequest<UserLoginDTO>,
    res: Response,
    next: NextFunction
  ) {
    const { email, password } = req.body;
    try {
      const user = await this._userLoginUseCase.execute(
        new EmailVO(email),
        new PasswordVO(password)
      );
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}
