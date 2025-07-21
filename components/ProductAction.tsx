"use client";

import { useState } from "react";
import ColorSelector from "./custom/ColorSelector";
import CartActions from "./custom/CartAction";

const colors = [
  { name: "Gray", code: "#808080" },
  { name: "White", code: "#ffffff" },
  { name: "Black", code: "#000000" },
  { name: "Brown", code: "#A0522D" },
  { name: "Pink", code: "#FFB6B3" },
  { name: "DarkGreen", code: "#006400" },
];

const ProductActions = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="lg:mt-12 mt-8">
      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onSelect={setSelectedColor}
      />

      <CartActions />
    </div>
  );
};

export default ProductActions;
