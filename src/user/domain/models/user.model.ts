import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { PasswordVO } from "../value-objects/password.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { EmailVO } from "../value-objects/email.vo";

export class UserModel {
  constructor(
    public readonly id: UuidVO,
    public name: NameVO,
    public email: EmailVO,
    public password: PasswordVO,
    public state: StateVO
  ) {}
}
