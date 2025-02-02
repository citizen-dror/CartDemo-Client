// components/OrderSummary.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Order, CartItem} from '../types';
import { submitOrder } from '../api/orderApi';

const OrderSummary: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Customer details state
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    try {
        const items: CartItem[] = cartItems;
        const order: Order = {
            orderId: "0",
            firstName,
            lastName,
            email,
            address,
            items,
            version: 1, 
        };
        // Call the createOrder function from the API file
        const result = await submitOrder(order);
        console.log("Order submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div>
      <h2>Order Summary</h2>

      {/* Customer Details Form */}
      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />

        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />

        <label>Address:</label>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
        />

        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <h3>Cart Items</h3>
      {cart.items.length === 0 ? <p>No items in cart</p> : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}

      {/* Total Price */}
      <h3>Total: ${cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>

      {/* Submit Order Button */}
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default OrderSummary;
