import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface ICategory
  extends Model<
    InferAttributes<ICategory>,
    InferCreationAttributes<ICategory>
  > {
  category_id: string;
  name: string;
  image?: string;
  description: string;
  state: boolean;
}
