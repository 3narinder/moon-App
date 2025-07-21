import React from "react";
import ProductCard from "./custom/ProductCard";
import { products } from "@/constants";
import Link from "next/link";

interface ProductListProps {
  limit?: number;
  grid4?: boolean;
}

const ProductList = ({ limit = 8, grid4 }: ProductListProps) => {
  return (
    <div
      className={`grid ${
        grid4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      } 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-12 md:gap-8 gap-6 lg:px-0 px-4 justify-center`}
    >
      {products.slice(0, limit).map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
