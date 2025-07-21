"use client";

import { useState } from "react";
import Checkbox from "./custom/Checkbox";
import { categories, colors, priceRanges, tags } from "@/constants";

interface FiltersState {
  categories: string[];
  price: string[];
  colors: string[];
  tags: string[];
}

const Filter: React.FC = () => {
  const [filters, setFilters] = useState<FiltersState>({
    categories: [],
    price: [],
    colors: [],
    tags: [],
  });

  const handleCheckboxChange = (
    filterType: keyof FiltersState,
    value: string
  ) => {
    setFilters((prevFilters) => {
      const isSelected = prevFilters[filterType].includes(value);
      const updatedFilters = {
        ...prevFilters,
        [filterType]: isSelected
          ? prevFilters[filterType].filter((item) => item !== value)
          : [...prevFilters[filterType], value],
      };
      console.log(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="py-7">
      {/* Categories */}
      <div className="mb-6 pb-8 border-b border-neutral-8">
        <div className="text-display-3 font-semibold text-neutral-8 mb-4">
          Category
        </div>
        <div className="flex flex-col gap-3">
          {categories.map((category) => (
            <Checkbox
              key={category}
              label={category}
              isChecked={filters.categories.includes(category)}
              onChange={() => handleCheckboxChange("categories", category)}
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 pb-8 border-b border-neutral-8">
        <div className="text-display-3 font-semibold text-neutral-8 mb-4">
          Price
        </div>
        <div className="flex flex-col gap-3">
          {priceRanges.map((price) => (
            <Checkbox
              key={price}
              label={price}
              isChecked={filters.price.includes(price)}
              onChange={() => handleCheckboxChange("price", price)}
            />
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6 pb-8 border-b border-neutral-8">
        <div className="text-display-3 font-semibold text-neutral-8 mb-4">
          Colors
        </div>
        <div className="flex gap-4">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-6 h-6 border border-neutral-4
                 cursor-pointer ${
                   filters?.colors?.includes(color)
                     ? "ring-1 ring-neutral-8"
                     : ""
                 }`}
              style={{ backgroundColor: color }}
              onClick={() => handleCheckboxChange("colors", color)}
            />
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <div className="text-display-3 font-semibold text-neutral-8 mb-4">
          Tags
        </div>
        <div className="flex flex-col gap-3">
          {tags.map((tag) => (
            <Checkbox
              key={tag}
              label={tag}
              isChecked={filters.tags.includes(tag)}
              onChange={() => handleCheckboxChange("tags", tag)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
