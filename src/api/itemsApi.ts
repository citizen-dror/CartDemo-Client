import { Product, ProductCategory } from "../types";

// Mock API for fetching categories
export const fetchCategories = async (): Promise<ProductCategory[]> => {
    return [
      { id: 1, name: "Vegetables" },
      { id: 2, name: "Dairy" },
      { id: 3, name: "Meat" },
      { id: 4, name: "Fruits" },
      { id: 5, name: "Bakery" },
      { id: 6, name: "Beverages" },
    ];
};

// Mock API for fetching products based on category
export const fetchProducts = async (categoryId: number): Promise<Product[]> => {
    const products: Product[] = [
        { id: "100", name: "Carrot", price: 1.5, categoryId: 1, categoryName: "Vegetables" },
        { id: "101", name: "Tomato", price: 2.5, categoryId: 1, categoryName: "Vegetables" },
        { id: "103", name: "Cucumber", price: 0.8, categoryId: 1, categoryName: "Vegetables" },
        { id: "201", name: "Milk", price: 2.0, categoryId: 2, categoryName: "Dairy" },
        { id: "202", name: "Cheese", price: 3.5, categoryId: 2, categoryName: "Dairy" },
        { id: "301", name: "Chicken", price: 5.0, categoryId: 3, categoryName: "Meat" },
        { id: "401", name: "Apple", price: 1.2, categoryId: 4, categoryName: "Fruits" },
        { id: "402", name: "Banana", price: 1.1, categoryId: 4, categoryName: "Fruits" },
        { id: "501", name: "Bread", price: 2.5, categoryId: 5, categoryName: "Bakery" },
        { id: "502", name: "Croissant", price: 3.0, categoryId: 5, categoryName: "Bakery" },
        { id: "601", name: "Orange Juice", price: 3.2, categoryId: 6, categoryName: "Beverages" },
        { id: "602", name: "Coffee", price: 4.0, categoryId: 6, categoryName: "Beverages" },
    ];

    return products.filter((product) => product.categoryId === categoryId);
};
