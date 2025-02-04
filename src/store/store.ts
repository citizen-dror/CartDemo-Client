import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import customerReducer from "../features/customer/customerSlice";

export const store = configureStore({
    reducer: {
      cart: cartReducer,
      order: orderReducer,
      customer: customerReducer
    }
  });
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
