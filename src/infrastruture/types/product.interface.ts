export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  categoryId: string;
  price: number;
  quantity: number;
  state: boolean;
  createdAt: Date;
}
