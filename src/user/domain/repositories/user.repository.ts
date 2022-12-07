import { UserInterface } from "../../infrastructure/types/user.interface";
import { UserModel } from "../models/user.model";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { EmailVO } from "../value-objects/email.vo";

export interface IUserRepository {
  toPersistance(userDomain: UserModel): UserInterface;

  toDomain(userPersistance: UserInterface): UserModel;

  findByEmail(email: EmailVO): Promise<UserModel | null>;

  findById(id: UuidVO): Promise<UserModel | null>;

  create(user: UserModel): Promise<UserModel | null>;
}
