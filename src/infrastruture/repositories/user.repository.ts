import { EmailVO } from "../../domain/value-objects/email.vo";
import { UuidVO } from "../../domain/value-objects/uuid.vo";
import { User } from "../models/user";

class UserRepository {

    async findByEmail(email: EmailVO) {
        return User.findOne({ where: { email: email.value } })
    }

    async findById(id: UuidVO) {
        return User.findByPk(id.value)
    }



}

export default new UserRepository()