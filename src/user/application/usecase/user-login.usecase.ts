import { PasswordVO } from "../../domain/value-objects/password.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { IUserRepository } from "../../domain/repositories/user.repository";
import { UserRepository } from "../../infrastructure/repositories/user.repository";

export class UserLoginUseCase {
  private _userRepository;

  constructor(dependencies: { userRepository: UserRepository }) {
    this._userRepository = dependencies.userRepository;
  }

  async execute(id: UuidVO, email: EmailVO, password: PasswordVO) {
    const userFound = await this._userRepository.findById(id);
  }
}
