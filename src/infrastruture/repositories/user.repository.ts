import { UserModel } from "../../domain/models/user.model";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { UuidVO } from "../../domain/value-objects/uuid.vo";
import { User } from "../models/user";
import { IUserPersitance } from "../types/user.interface";

class UserRepository {
  toPersistance(userDomain: UserModel): IUserPersitance {
    const { id, name, email, password, state } = userDomain;
    return {
      id: id.value,
      name: name.value,
      email: email.value,
      password: password.value,
      state: state.value,
    };
  }

  async findByEmail(email: EmailVO) {
    return User.findOne({ where: { email: email.value } });
  }

  async findById(id: UuidVO) {
    return User.findByPk(id.value);
  }

  async create(user: UserModel) {
    const userPersistance = this.toPersistance(user);
    return await User.create(userPersistance);
  }
}

export default new UserRepository();
