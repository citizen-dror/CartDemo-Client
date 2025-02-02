import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Order } from "../types";
import { submitOrder } from "../api/orderApi";
import ValidatedInput from "./ValidatedInput";

const OrderSummary: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const validateName = (value: string) => (value.length >= 2 ? "" : "Must be at least 2 characters");
    const validateAddress = (value: string) => (value.trim() !== "" ? "" : "Address is required");
    const validateEmail = (value: string) => (/\S+@\S+\.\S+/.test(value) ? "" : "Enter a valid email");

    // Use useMemo to prevent unnecessary calculations
    const isFormValid = useMemo(
        () => firstName.length >= 3 && lastName.length >= 3 && address.trim() !== "" && /\S+@\S+\.\S+/.test(email),
        [firstName, lastName, address, email]
    );

    const handleSubmit = async () => {
        if (!isFormValid) return;

        try {
            const order: Order = {
                orderId: "0",
                firstName,
                lastName,
                email,
                address,
                items: cartItems,
                version: 1,
            };
            const result = await submitOrder(order);
            console.log("Order submitted successfully:", result);
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            {/* Customer Details Form */}
            <div style={{ flex: "1", minWidth: "250px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <ValidatedInput label="First Name" value={firstName} onChange={setFirstName} validate={validateName} />
                <ValidatedInput label="Last Name" value={lastName} onChange={setLastName} validate={validateName} />
                <ValidatedInput label="Address" value={address} onChange={setAddress} validate={validateAddress} />
                <ValidatedInput label="Email" type="email" value={email} onChange={setEmail} validate={validateEmail} />
            </div>

            {/* Cart Items and Submit Button */}
            <div style={{ flex: "2" }}>
                <h3>Cart Items</h3>
                {cartItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Total Price */}
                <h3>Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>

                {/* Submit Order Button */}
                <button onClick={handleSubmit} disabled={!isFormValid} style={{ background: isFormValid ? "#007bff" : "#ccc", color: "white", padding: "10px", border: "none", cursor: isFormValid ? "pointer" : "not-allowed" }}>
                    Submit Order
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;
