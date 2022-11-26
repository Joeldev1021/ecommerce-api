import { EmailVO } from "../../../domain/value-objects/email.vo";
import { PasswordVO } from "../../../domain/value-objects/password.vo";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import userRepository from "../../../infrastruture/repositories/user.repository";
import { UserEmailAlreadyInUseException } from "../../errors/user-email-already-in-use.exception";
import { UserIdAlreadyInUseException } from "../../errors/user-id-already-in-use.exception";


class UserLoginUseCase {
    async execute(id: UuidVO, email: EmailVO, password: PasswordVO) {
        const userFound = await userRepository.findById(id)
        if (userFound) throw new UserIdAlreadyInUseException()

        const userEmail = await userRepository.findByEmail(email)
        if (userEmail) throw new UserEmailAlreadyInUseException()



    }
}

export default new UserLoginUseCase()