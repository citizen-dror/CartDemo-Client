import axios from "axios";
import { Order } from "../types"; 

// Use the environment variable to get the base URL
const API_URL = `${import.meta.env.VITE_API_ORDERS_BASE_URL}/orders`;

// Function to create an order by sending a POST request to the API
export const submitOrder = async (order: Order) => {
  try {
    const response = await axios.post(API_URL, order);
    return response.data;
  } catch (error) {
    console.error("Error submitting order:", error);
    throw error; // Optionally, you can throw the error to be handled in the component
  }
};

export const fetchOrdersByEmail = async(email:string) =>{
  try {
    const response = await axios.get(`${API_URL}/${email}`);
    return response.data;
  } catch (error) {
    console.error("Error fetchOrdersByEmail:", error);
    throw error; // Optionally, you can throw the error to be handled in the component
  }
}