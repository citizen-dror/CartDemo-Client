import { CartItem } from "./index";

export interface Order {
  orderId: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  items: CartItem[];
}
