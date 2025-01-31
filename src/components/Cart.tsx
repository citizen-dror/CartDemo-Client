// components/Cart.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeItem } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h3>Cart</h3>
      {cart.items.length === 0 ? <p>No items in cart</p> : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              <button onClick={() => dispatch(removeItem(item.id))}>-</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default Cart;
