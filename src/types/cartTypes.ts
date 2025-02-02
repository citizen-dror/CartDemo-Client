// import type { Product } from "./product";

export interface CartItem {
  id: string;
  name: string;
  categoryId: number;
  categoryName: string;
  price: number;
  quantity: number;
}

export type Cart = CartItem[];