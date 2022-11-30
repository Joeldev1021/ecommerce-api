import { DataTypes } from "sequelize";
import { ICategory } from "../types/models/category.models";
import sequelize from "../config/mysql";
import { Product } from "./product";

export const Category = sequelize.define<ICategory>("Category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
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

  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Category.hasMany(Product, { as: "products" });
