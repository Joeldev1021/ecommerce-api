import { Sequelize, DataTypes } from "sequelize";
import { ICategory } from "../types/models/category.models";

const sequelize = new Sequelize("sqlite::memory:");
export const Category = sequelize.define<ICategory>("Category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(400),
    allowNull: true,
    //-> false
  },
  //todo -> ref-> products
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
