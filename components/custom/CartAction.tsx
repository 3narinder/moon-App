"use client";

import { CiHeart } from "react-icons/ci";
import Button from "@/components/custom/Button";
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const CartActions = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4 lg:mt-12 mt-8">
      <div className="flex items-center gap-4">
        <QuantityCounter quantity={quantity} onChange={setQuantity} />
        <Button text="ADD TO CART" />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="border" text="BUY NOW" />
        <div className="border p-[5px] cursor-pointer">
          <CiHeart className="text-2xl text-neutral-8" />
        </div>
      </div>
    </div>
  );
};

export default CartActions;
