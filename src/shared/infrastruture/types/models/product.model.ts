import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface IProduct
  extends Model<InferAttributes<IProduct>, InferCreationAttributes<IProduct>> {
  product_id: string;
  name: string;
  description: string;
  imageUrl?: string;
  price: number;
  quantity: number;
  createdAt: Date;
  state: boolean;
  categoryId: string;
}
