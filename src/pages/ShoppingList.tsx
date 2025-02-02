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
    <>
        <h2>Shopping List</h2>
        <div style={{ display: "flex", gap: "20px", padding: "20px"}}>            
        {/* Left Pane: Shopping List */}
        <div style={{ flex: "1" , minWidth: "250px"}}>
           

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
            <button onClick={() => dispatch(addItem(selectedProduct))}>
                Add
            </button>
            )}
        </div>
        {/* Left Pane: Cart */}
        <div style={{ flex: "6" }}>
            <Cart />
        </div>
        </div>  
    </>
   
  );
};

export default ShoppingList;
