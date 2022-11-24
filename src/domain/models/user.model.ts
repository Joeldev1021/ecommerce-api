import { EmailVO } from "../value-objects/email.vo";
import { NameVO } from "../value-objects/name.vo";
import { PasswordVO } from "../value-objects/password.vo";
import { UuidVO } from "../value-objects/uuid.vo";

export class UserModel {
    constructor(
        public readonly id: UuidVO,
        public name: NameVO,
        public email: EmailVO,
        public password: PasswordVO
    ) {
    }
}