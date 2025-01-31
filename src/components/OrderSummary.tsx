// components/OrderSummary.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const OrderSummary: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  
  // Customer details state
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    // const order: Order = {
    //   orderId: Date.now().toString(), // Unique order ID (you can replace this with actual logic)
    //   firstName,
    //   lastName,
    //   email,
    //   address,
    //   items: cart.items,
    // };

    // You can dispatch an action to save the order or send it to an API
    //console.log("Order submitted:", order);
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
