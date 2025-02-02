import axios from "axios";
import { Order } from "../types"; 

const API_URL = "http://localhost:3000/orders";

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