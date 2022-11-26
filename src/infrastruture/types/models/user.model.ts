import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  state: boolean;
}
