import { IUser } from "../../infrastruture/types/models/user.model";
import { UserInterface } from "../../infrastruture/types/user.interface";
import { UserModel } from "../models/user.model";
import { EmailVO } from "../value-objects/email.vo";
import { UuidVO } from "../value-objects/uuid.vo";

export interface IUserRepository {
  toPersistance(userDomain: UserModel): UserInterface;

  toDomain(userPersistance: UserInterface): UserModel;

  findByEmail(email: EmailVO): Promise<UserModel>;

  findById(id: UuidVO): Promise<UserModel>;

  create(user: UserModel): Promise<UserModel>;
}
