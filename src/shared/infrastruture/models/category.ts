import { DataTypes } from "sequelize";
import { ICategory } from "../types/models/category.models";
import sequelize from "../config/mysql";
import { Product } from "./product";

export const Category = sequelize.define<ICategory>(
  "Categories",
  {
    category_id: {
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
  },
  {
    timestamps: false,
  }
);

Category.hasMany(Product, {
  as: "products",
  foreignKey: "category_id",
  sourceKey: "category_id",
  onDelete: "CASCADE",
  hooks: true,
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "category_id",
});
