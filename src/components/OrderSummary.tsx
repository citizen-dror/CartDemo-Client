import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Order } from "../types";
import { submitOrder } from "../api/orderApi";
import ValidatedInput from "./ValidatedInput";
import { updateCustomer } from "../features/customer/customerSlice";

const OrderSummary: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const customer = useSelector((state: RootState) => state.customer);

    const validateName = (value: string) => (value.length >= 2 ? "" : "Must be at least 2 characters");
    const validateAddress = (value: string) => (value.trim() !== "" ? "" : "Address is required");
    const validateEmail = (value: string) => (/\S+@\S+\.\S+/.test(value) ? "" : "Enter a valid email");

    const isFormValid = useMemo(
        () => customer.firstName.length >= 3 && customer.lastName.length >= 3 && customer.address.trim() !== "" && /\S+@\S+\.\S+/.test(customer.email),
        [customer]
    );

    const handleInputChange = (field: keyof typeof customer, value: string) => {
        dispatch(updateCustomer({ [field]: value }));
    };

    const handleSubmit = async () => {
        if (!isFormValid) return;

        try {
            const order: Order = {
                orderId: "0",
                ...customer,
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
            <div style={{ flex: "1", minWidth: "250px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <ValidatedInput label="First Name" value={customer.firstName} onChange={(value) => handleInputChange("firstName", value)} validate={validateName} />
                <ValidatedInput label="Last Name" value={customer.lastName} onChange={(value) => handleInputChange("lastName", value)} validate={validateName} />
                <ValidatedInput label="Address" value={customer.address} onChange={(value) => handleInputChange("address", value)} validate={validateAddress} />
                <ValidatedInput label="Email" type="email" value={customer.email} onChange={(value) => handleInputChange("email", value)} validate={validateEmail} />
            </div>

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
                <h3>Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>
                <button onClick={handleSubmit} disabled={!isFormValid} style={{ background: isFormValid ? "#007bff" : "#ccc", color: "white", padding: "10px", border: "none", cursor: isFormValid ? "pointer" : "not-allowed" }}>
                    Submit Order
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;
