import { EmailVO } from "../../domain/value-objects/email.vo";
import { PasswordVO } from "../../domain/value-objects/password.vo";
import { UuidVO } from "../../domain/value-objects/uuid.vo";
import userRepository from "../../infrastruture/repositories/user.repository";


class UserLoginUseCase {
    async execute(id: UuidVO, email: EmailVO, password: PasswordVO) {
        const userFound = await userRepository.findById(id)
        if (userFound) throw new Error('user already exists')
        const userEmail = await userRepository.findByEmail(email)
        if (userEmail) throw new Error('email already exists')




    }
}

export default new UserLoginUseCase()