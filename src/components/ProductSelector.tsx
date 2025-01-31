// components/ProductSelector.tsx
import React from "react";
import { Product } from "../types";

interface ProductSelectorProps {
  products: Product[];
  selectedProductId: string;
  onProductChange: (productId: string) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ products, selectedProductId, onProductChange }) => {
  return (
    <div>
      <label>Product: </label>
      <select
        value={selectedProductId}
        onChange={(e) => onProductChange(e.target.value)}
      >
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name} - ${product.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelector;
