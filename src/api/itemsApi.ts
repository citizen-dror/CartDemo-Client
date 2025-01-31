
import { Product, ProductCategory } from "../types";

// Mock API for fetching categories
export const fetchCategories = async (): Promise<ProductCategory[]> => {
    return [
      { id: 1, name: "Vegetables" },
      { id: 2, name: "Dairy" },
      { id: 3, name: "Meat" },
    ];
  };
  
  // Mock API for fetching products based on category
  export const fetchProducts = async (categoryId: number): Promise<Product[]> => {
    const products: Product[] = [
      { id: "1", name: "Carrot", price: 1.5, categoryId: 1 },
      { id: "2", name: "Milk", price: 2.0, categoryId: 2 },
      { id: "3", name: "Cheese", price: 3.5, categoryId: 2 },
      { id: "4", name: "Chicken", price: 5.0, categoryId: 3 },
    ];
  
    return products.filter((product) => product.categoryId === categoryId);
  };