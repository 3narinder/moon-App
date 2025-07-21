"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Product } from "@/constants/Types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const randomIndex = Math.floor(
    Math.random() * Math.min(10, product?.image?.length)
  );
  const imageUrl = product.image[randomIndex];

  return (
    <div className="flex flex-col md:w-[225px] w-[160px] md:h-auto h-[440px] cursor-pointer">
      <div className="flex flex-col">
        <Image
          src={imageUrl}
          alt="product image"
          width={255}
          height={331}
          className="md:w-[255px] md:h-[331px] w-[190px] h-[240px]"
        />

        <div className="flex flex-col">
          <div className="text-display-2 font-semibold mt-4 text-warm-black">
            <div className="">{product?.name}</div>
            <div className="mt-1">${product?.price}</div>
          </div>

          <div className="text-display-1 text-neutral-6 mt-3">
            {product?.description?.length > 60
              ? `${product.description.slice(0, 60)}...`
              : product?.description}
          </div>
        </div>
      </div>

      <div className="mt-auto md:mt-12">
        <Button variant="border" text="ADD TO CART" />
      </div>
    </div>
  );
};

export default ProductCard;
