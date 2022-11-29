export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  price: number;
  quantity: number;
  state: boolean;
  createdAt: Date;
}
