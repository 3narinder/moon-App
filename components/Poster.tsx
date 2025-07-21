import Image from "next/image";
import React, { ReactNode } from "react";

type PosterProps = {
  children: ReactNode;
  imageDesktop: string;
  imageMobile: string;
  imageLeft?: boolean;
  flipImage?: boolean;
};

const Poster: React.FC<PosterProps> = ({
  children,
  imageDesktop,
  imageMobile,
  imageLeft = false,
  flipImage,
}) => {
  return (
    <div
      className={`lg:mx-32 flex lg:flex-row flex-col h-full ${
        imageLeft ? "lg:flex-row-reverse" : ""
      }  ${flipImage ? "flex-col-reverse" : ""}`}
    >
      {/* Text Heading */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center lg:py-20 md:py-36 py-12 lg:px-[60px] text-warm-black bg-neutral-2">
        {children}
      </div>

      {/* Image */}
      <div className="lg:w-1/2 w-full flex">
        <Image
          src={imageDesktop}
          alt="poster image"
          width={555}
          height={350}
          className="w-full h-full object-cover lg:block hidden"
        />

        <Image
          src={imageMobile}
          alt="poster image"
          width={555}
          height={350}
          className="w-full h-full object-cover lg:hidden block"
        />
      </div>
    </div>
  );
};

export default Poster;
