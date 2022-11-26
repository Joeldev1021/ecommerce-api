import { UserModel } from "../../../domain/models/user.model";
import { EmailVO } from "../../../domain/value-objects/email.vo";
import { NameVO } from "../../../domain/value-objects/name.vo";
import { PasswordVO } from "../../../domain/value-objects/password.vo";
import { StateVO } from "../../../domain/value-objects/state.vo";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import userRepository from "../../../infrastruture/repositories/user.repository";
import { UserEmailAlreadyInUseException } from "../../errors/user-email-already-in-use.exception";
import { UserIdAlreadyInUseException } from "../../errors/user-id-already-in-use.exception";

class UserRegisterUseCase {
  async execute(
    id: UuidVO,
    name: NameVO,
    email: EmailVO,
    password: PasswordVO
  ) {
    const userFound = await userRepository.findById(id);
    if (userFound) throw new UserIdAlreadyInUseException();

    const userEmail = await userRepository.findByEmail(email);
    if (userEmail) throw new UserEmailAlreadyInUseException();

    return userRepository.create(
      new UserModel(id, name, email, password, new StateVO(true))
    );
  }
}

export default new UserRegisterUseCase();
