import { UserModel } from "../../domain/models/user.model";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { PasswordVO } from "../../domain/value-objects/password.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { UserIdAlreadyInUseException } from "../errors/user-id-already-in-use.exception";
import { UserEmailAlreadyInUseException } from "../errors/user-email-already-in-use.exception";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { IUserRepository } from "../../domain/repositories/user.repository";

export class UserRegisterUseCase {
  private _userRepository: IUserRepository;
  constructor(dependencies: { userRepository: UserRepository }) {
    this._userRepository = dependencies.userRepository;
  }
  async execute(
    id: UuidVO,
    name: NameVO,
    email: EmailVO,
    password: PasswordVO
  ) {
    const userFound = await this._userRepository.findById(id);
    if (userFound) throw new UserIdAlreadyInUseException();

    const userEmail = await this._userRepository.findByEmail(email);
    if (userEmail) throw new UserEmailAlreadyInUseException();

    /* hash password */
    const passwordHash = await PasswordVO.create(password.value);

    return this._userRepository.create(
      new UserModel(id, name, email, passwordHash, new StateVO(true))
    );
  }
}
