import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface IUser
  extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  user_id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  state: boolean;
}
