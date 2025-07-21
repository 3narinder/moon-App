"use client";

import React from "react";

interface Color {
  name: string;
  code: string;
}

interface ColorSelectorProps {
  colors: Color[];
  selectedColor: Color;
  onSelect: (color: Color) => void;
}

const ColorSelector = ({
  colors,
  selectedColor,
  onSelect,
}: ColorSelectorProps) => {
  return (
    <div>
      <div className="text-display-2 flex items-center font-semibold gap-2">
        <span className="text-neutral-8">Color :</span>
        <div
          className="w-4 h-4 border"
          style={{
            backgroundColor: selectedColor.code,
            borderColor:
              selectedColor.code === "#ffffff" ? "#d1d5db" : selectedColor.code,
          }}
        ></div>
        <span className="text-neutral-5 capitalize">{selectedColor.name}</span>
      </div>

      <div className="flex items-center gap-4 mt-4 flex-wrap">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`p-0.5 ${
              selectedColor.code === color.code
                ? "border border-neutral-5"
                : color.code === "#ffffff"
                ? "border border-neutral-4"
                : "border border-transparent"
            } cursor-pointer transition`}
            onClick={() => onSelect(color)}
          >
            <div
              className={` ${
                color.code === "#ffffff" ? "w-5 h-5" : "w-6 h-6"
              } `}
              style={{ backgroundColor: color.code }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
