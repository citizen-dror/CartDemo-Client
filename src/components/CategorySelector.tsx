// components/CategorySelector.tsx
import React from "react";
import { ProductCategory } from "../types";

interface CategorySelectorProps {
  categories: ProductCategory[];
  selectedCategoryId: number;
  onCategoryChange: (categoryId: number) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, selectedCategoryId, onCategoryChange }) => {
  return (
    <div>
      <label>Category: </label>
      <select
        value={selectedCategoryId}
        onChange={(e) => onCategoryChange(Number(e.target.value))}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
