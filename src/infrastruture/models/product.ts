import { Sequelize, DataTypes } from "sequelize";
import { IProduct } from "../types/models/product.model";

const sequelize = new Sequelize("sqlite::memory:");
export const Product = sequelize.define<IProduct>("Product", {
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
  imageUrl: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  //todo -> ref category
  price: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
  quantity: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
