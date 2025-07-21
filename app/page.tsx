import Button from "@/components/custom/Button";
import CategoryCard from "@/components/custom/CategoryCard";
import SectionHeading from "@/components/custom/SectionHeading";
import { CustomSlider } from "@/components/custom/Slider";
import Hero from "@/components/Hero";
import Poster from "@/components/Poster";
import ProductList from "@/components/ProductList";
import SignUpSection from "@/components/SignUpSection";
import {
  category1,
  category2,
  category3,
  category4,
  homeHeroDesktop,
  homeHeroMobile,
  logoLight,
  heroMobilePoster1,
  heroPoster1,
  heroPoster3,
  heroMobilePoster3,
  heroPoster4,
  heroMobilePoster4,
} from "@/constants/Images";
import React from "react";

const categories = [
  { img: category1, text: "tableware" },
  { img: category2, text: "home decor" },
  { img: category3, text: "holiday" },
  { img: category4, text: "collection" },
];

const HomePage = () => {
  return (
    <section className="flex flex-col">
      {/* hero */}
      <Hero
        heroImg={homeHeroDesktop}
        heroImgMobile={homeHeroMobile}
        logo={logoLight}
        posterColor="bg-green-dark"
      >
        <h3 className="text-display-3 text-neutral-2">
          Handcrafted in Viet Nam since 1650
        </h3>

        <h1 className="mt-4 lg:w-full heading-8 text-center font-bold text-neutral-2 uppercase tracking-wider">
          bat trang dinner set
        </h1>

        <div className="w-3/5 mt-8">
          <Button text="SHOP NOW" variant="white" />
        </div>
      </Hero>

      {/* Categories */}
      <div className="lg:mx-32 px-2 lg:py-20 md:py-8 py-4">
        <div className="hidden md:grid grid-cols-4 lg:gap-8 md:gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} img={category.img} text={category.text} />
          ))}
        </div>

        <div className="md:hidden">
          <CustomSlider items={categories}>
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                img={category?.img}
                text={category?.text}
              />
            ))}
          </CustomSlider>
        </div>
      </div>

      {/* poster1 */}
      <Poster imageDesktop={heroPoster1} imageMobile={heroMobilePoster1}>
        <>
          <h1 className="lg:heading-7 heading-6 uppercase tracking-wider lg:mb-6 mb-2">
            Up to 40% off our Christmas collection
          </h1>

          <p className="lg:text-display-3 text-display-2 text-neutral-7 lg:mb-8 mb-6 lg:px-6 px-4">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices
          </p>

          <p className="text-display-2 font-semibold underline uppercase text-warm-black tracking-wide cursor-pointer">
            shop now
          </p>
        </>
      </Poster>

      {/* Best seller list */}
      <div className="lg:mx-32 lg:py-20 md:py-16 py-10">
        <SectionHeading text="best sellers" />

        <div className="lg:pl-12">
          <ProductList grid4 />
        </div>
      </div>

      {/* poster 3 & 4 */}
      <Poster imageDesktop={heroPoster1} imageMobile={heroMobilePoster1}>
        <>
          <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
            Made in viet Nam since 1450
          </h1>

          <p className="lg:text-display-3 text-display-2 text-neutral-7 lg:mb-8 mb-6 lg:px-6 px-4">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices
          </p>

          <p className="text-display-2 font-semibold underline uppercase text-warm-black tracking-wide cursor-pointer">
            learn more
          </p>
        </>
      </Poster>

      <Poster
        imageDesktop={heroPoster3}
        imageMobile={heroMobilePoster3}
        imageLeft
      >
        <>
          <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
            our history
          </h1>

          <p className="lg:text-display-3 text-display-2 text-neutral-7 lg:mb-8 mb-6 lg:px-6 px-4">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices
          </p>

          <p className="text-display-2 font-semibold underline uppercase text-warm-black tracking-wide cursor-pointer">
            shop now
          </p>
        </>
      </Poster>

      {/* latest products */}
      <div className="lg:mx-32 lg:py-20 md:py-16 py-10">
        <SectionHeading text="discover latest arrivals" />

        <div className="lg:pl-12">
          <ProductList grid4 limit={4} />
        </div>
      </div>

      {/* blog poster */}
      <div className="flex flex-col">
        <SectionHeading text="our blogs" />
        <Poster
          imageDesktop={heroPoster4}
          imageMobile={heroMobilePoster4}
          flipImage
        >
          <>
            <div className="mb-2 uppercase tracking-wide text-display-4 font-semibold text-neutral-6">
              tableware
            </div>
            <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
              the secret to the kitchen room
            </h1>

            <p className="lg:text-display-3 text-display-2 text-neutral-7 lg:mb-8 mb-6 lg:px-6 px-4">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices
            </p>

            <p className="text-display-2 font-semibold underline uppercase text-warm-black tracking-wide cursor-pointer">
              read more
            </p>
          </>
        </Poster>
      </div>

      <SignUpSection />
    </section>
  );
};

export default HomePage;
