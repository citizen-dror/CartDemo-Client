import { Product } from "./product";
export interface CartItem extends Product {
  quantity: number;
}

export type Cart = CartItem[];