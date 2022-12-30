import { PasswordVO } from "../../domain/value-objects/password.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { IUserRepository } from "../../domain/repositories/user.repository";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";

@injectable()
export class UserLoginUseCase {
  constructor(
    @inject(containerTypes.userRepository)
    private _userRepository: IUserRepository
  ) {}

  async execute(email: EmailVO, password: PasswordVO) {}
}
