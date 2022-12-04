import { DataTypes } from "sequelize";
import { IProduct } from "../types/models/product.model";
import sequelize from "../config/mysql";
import { Category } from "./category";

export const Product = sequelize.define<IProduct>(
  "Product",
  {
    product_id: {
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
    imageUrl: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    //todo=> categoryId
    categoryId: {
      field: "category_id",
      allowNull: false,
      type: DataTypes.UUIDV4,
      references: {
        model: Category,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);
