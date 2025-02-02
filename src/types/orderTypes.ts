import type { CartItem } from "./cartTypes";

export interface Order {
  orderId: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  items: CartItem[];
  version: number;
}
