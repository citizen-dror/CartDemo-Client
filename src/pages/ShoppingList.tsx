// pages/ShoppingList.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useFetchItems } from "../hooks/useFetchItems";
import CategorySelector from "../components/CategorySelector";
import ProductSelector from "../components/ProductSelector";
import Cart from "../components/Cart";

const ShoppingList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    categories,
    products,
    selectedCategoryId,
    selectedProductId,
    setSelectedCategoryId,
    setSelectedProductId,
  } = useFetchItems();

  const selectedProduct = products.find((product) => product.id === selectedProductId);

  return (
    <div>
      <h2>Shopping List</h2>

      {/* Category Selection */}
      <CategorySelector
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={setSelectedCategoryId}
      />

      {/* Product Selection */}
      {selectedCategoryId && (
        <ProductSelector
          products={products}
          selectedProductId={selectedProductId}
          onProductChange={setSelectedProductId}
        />
      )}

      {/* Add Button */}
      {selectedProduct && (
        <button onClick={() => dispatch(addItem(selectedProduct))}>Add</button>
      )}

      {/* Cart */}
      <Cart />
    </div>
  );
};

export default ShoppingList;
