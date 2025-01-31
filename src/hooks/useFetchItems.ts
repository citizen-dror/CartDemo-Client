// hooks/useFetchItems.ts
import { useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "../api/itemsApi";
import { Product, ProductCategory } from "../types";

export const useFetchItems = () => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [selectedProductId, setSelectedProductId] = useState<string>("");

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
      setSelectedCategoryId(categoriesData[0]?.id || 0); // Default to first category
    };

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const fetchProductsData = async () => {
      if (selectedCategoryId) {
        const productsData = await fetchProducts(selectedCategoryId);
        setProducts(productsData);
        setSelectedProductId(productsData[0]?.id || ""); // Default to first product
      }
    };

    fetchProductsData();
  }, [selectedCategoryId]);

  return {
    categories,
    products,
    selectedCategoryId,
    selectedProductId,
    setSelectedCategoryId,
    setSelectedProductId,
  };
};
