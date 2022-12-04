import { PasswordVO } from "../../domain/value-objects/password.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import userRepository from "../../infrastructure/repositories/user.repository";
import { EmailVO } from "../../domain/value-objects/email.vo";

class UserLoginUseCase {
  async execute(id: UuidVO, email: EmailVO, password: PasswordVO) {
    const userFound = await userRepository.findById(id);
  }
}

export default new UserLoginUseCase();
