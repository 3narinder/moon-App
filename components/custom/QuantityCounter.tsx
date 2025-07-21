"use client";

import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface QuantityCounterProps {
  quantity: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const QuantityCounter = ({
  quantity,
  onChange,
  min = 1,
  max = 99,
}: QuantityCounterProps) => {
  const increase = () => {
    if (quantity < max) onChange(quantity + 1);
  };

  const decrease = () => {
    if (quantity > min) onChange(quantity - 1);
  };

  return (
    <div className="flex items-center gap-6 w-32 justify-center  border border-neutral-6 px-2 py-[7px] text-warm-black text-display-2">
      <FiMinus onClick={decrease} className="text-neutral-6 cursor-pointer" />

      <span className="text-display-1 font-semibold">{quantity}</span>

      <FiPlus onClick={increase} className=" text-neutral-6 cursor-pointer" />
    </div>
  );
};

export default QuantityCounter;
