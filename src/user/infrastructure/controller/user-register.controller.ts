import { NextFunction, Request, Response } from "express";
import { UserRegisterUseCase } from "../../application/usecase/user-register.usecase";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { PasswordVO } from "../../domain/value-objects/password.vo";
import { UserRegisterDTO } from "../dtos/user-register.dto";
import { AuthRequest } from "../interface";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";

@injectable()
export class UserRegisterController {
  constructor(
    @inject(containerTypes.userRegisterUseCase)
    private _userRegisterUseCase: UserRegisterUseCase
  ) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this._userRegisterUseCase.execute(
        new UuidVO(req.body.id),
        new NameVO(req.body.name),
        new EmailVO(req.body.email),
        new PasswordVO(req.body.password)
      );
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}
