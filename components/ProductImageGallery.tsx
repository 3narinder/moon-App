"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

const ProductImageGallery = ({ images, alt }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={selectedImage}
        alt={alt}
        width={535}
        height={700}
        className="transition-transform duration-300"
      />

      <div className="flex items-center justify-center mt-4 cursor-pointer lg:gap-6 gap-4 flex-wrap">
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`thumbnail-${i}`}
            width={80}
            height={80}
            onClick={() => setSelectedImage(image)}
            className={`transition-all duration-300 ${
              selectedImage === image
                ? "ring-1 ring-neutral-4 scale-105"
                : "hover:scale-105"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
