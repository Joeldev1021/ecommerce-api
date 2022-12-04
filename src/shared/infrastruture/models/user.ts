import { DataTypes } from "sequelize";
import { IUser } from "../types/models/user.model";
import sequelize from "../config/mysql";

export const User = sequelize.define<IUser>("User", {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  /* roleId: {
    type: DataTypes.UUID,
    allowNull: false
  }, */
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
