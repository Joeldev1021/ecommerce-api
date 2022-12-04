import { UserModel } from "../../domain/models/user.model";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { User } from "../../../shared/infrastruture/models/user";
import { UserInterface } from "../types/user.interface";
import { EmailVO } from "../../domain/value-objects/email.vo";

class UserRepository {
  /**
   * It takes a UserModel object and returns a UserInterface object
   * @param {UserModel} userDomain - UserModel
   * @returns An object with the same properties as the UserModel, but with the values of the
   * properties.
   */
  toPersistance(userDomain: UserModel): UserInterface {
    const { id, name, email, password, state } = userDomain;
    return {
      user_id: id.value,
      name: name.value,
      email: email.value,
      password: password.value,
      state: state.value,
    };
  }

  /**
   * "Find a user by email."
   *
   * The function is async, so it returns a promise
   * @param {EmailVO} email - EmailVO - This is the email address that we want to find in the database.
   * @returns A promise that resolves to a User object.
   */
  async findByEmail(email: EmailVO) {
    return User.findOne({ where: { email: email.value } });
  }

  /**
   * "Find a user by their id."
   *
   * The first line of the function is a comment. It's a good idea to add comments to your functions
   * @param {UuidVO} id - UuidVO
   * @returns A promise that resolves to a User instance.
   */
  async findById(id: UuidVO) {
    return User.findByPk(id.value);
  }

  /**
   * It takes a user object, converts it to a user persistence object, and then creates a new user
   * persistence object in the database
   * @param {UserModel} user - UserModel - this is the user object that we are passing in from the
   * controller.
   * @returns The userPersistance object is being returned.
   */
  async create(user: UserModel) {
    const userPersistance = this.toPersistance(user);
    return await User.create(userPersistance);
  }
}

export default new UserRepository();
