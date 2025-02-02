import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

interface OrderState {
  orderId: string;
  items: CartItem[];
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
}

const initialState: OrderState = {
  orderId: "",
  items: [],
  customer: {
    firstName: "",
    lastName: "",
    email: "",
    address: ""
  }
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
      addItemToOrder: (state, action: PayloadAction<CartItem>) => {
        state.items.push(action.payload);
      },
      removeItemFromOrder: (state, action: PayloadAction<string>) => {
        // Remove item based on the 'id' property directly (since CartItem has 'id' instead of 'product.id')
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      setCustomerInfo: (state, action: PayloadAction<OrderState['customer']>) => {
        state.customer = action.payload;
      },
      setOrderId: (state, action: PayloadAction<string>) => {
        state.orderId = action.payload;
      },
    },
  });

export const { addItemToOrder, removeItemFromOrder, setCustomerInfo, setOrderId } = orderSlice.actions;

export default orderSlice.reducer;
