import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  img: string;
  text: string;
}

const CategoryCard = ({ img, text }: CategoryCardProps) => {
  return (
    <div className="flex flex-col bg-white">
      <Image
        src={img}
        alt="category poster"
        width={300}
        height={300}
        className="lg:w-[300px] w-[240px]"
      />

      <div className="uppercase text-display-4 text-neutral-8 mt-4 text-center font-semibold tracking-wider">
        {text}
      </div>
    </div>
  );
};

export default CategoryCard;
