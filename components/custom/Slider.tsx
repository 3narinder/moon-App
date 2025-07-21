"use client";
import { leftIcon, rightIcon } from "@/constants/Images";
import Image from "next/image";
import { ReactNode, useEffect, useState, Children } from "react";

interface CustomSliderProps {
  items: { img: string; text: string }[];
  children: ReactNode;
}

export const CustomSlider = ({ children }: CustomSliderProps) => {
  const slidesArray = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = slidesArray.length;
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex >= totalSlides) {
      setIsTransitioning(true);
      setCurrentIndex(totalSlides + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(true);
      setCurrentIndex(-1);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides);
      }, 500);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isTransitioning ? "" : "!transition-none"
        }`}
        style={{ transform: `translateX(-${currentIndex * 75}%)` }}
      >
        {/* Clone last slide for seamless loop */}
        <div className="flex-shrink-0 w-[75%] md:w-[65%]">
          {slidesArray[totalSlides - 1]}
        </div>

        {/* Actual slides */}
        {slidesArray.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-[75%] md:w-[65%]">
            {child}
          </div>
        ))}

        {/* Clone first slide for seamless loop */}
        <div className="flex-shrink-0 w-[75%] md:w-[65%]">{slidesArray[0]}</div>
      </div>

      <Image
        onClick={nextSlide}
        src={rightIcon}
        alt="Next"
        width={25}
        height={20}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />

      <Image
        onClick={prevSlide}
        src={leftIcon}
        alt="Previous"
        width={25}
        height={20}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
      />
    </div>
  );
};
