import Image from "next/image";
import React, { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
  heroImg: string;
  heroImgMobile: string;
  logo: string;
  posterColor: string;
}

const Hero = ({
  children,
  heroImg,
  heroImgMobile,
  logo,
  posterColor,
}: HeroProps) => {
  return (
    <section className="lg:relative w-full min-h-[80vh] flex lg:flex-row flex-col justify-center items-center">
      {/* Image Container */}
      <div className="relative w-full flex-grow md:min-h-[80vh] h-[50vh]">
        <Image
          src={heroImg}
          alt="Home Hero"
          fill
          className="object-cover lg:block hidden"
          priority
        />

        <Image
          src={heroImgMobile}
          alt="Home Hero"
          fill
          className="object-cover lg:hidden block"
          priority
        />
      </div>

      {/* Poster Content */}
      <div
        className={`lg:absolute lg:w-96 w-full ${posterColor} flex flex-col items-center justify-center min-h-[50vh] lg:min-h-[80vh] z-10 left-0 lg:translate-x-1/2 p-8`}
      >
        <Image src={logo} alt="logo" width={60} height={38} className="mb-6" />

        {children}
      </div>
    </section>
  );
};

export default Hero;
