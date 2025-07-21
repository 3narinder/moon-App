import { CustomSlider } from "@/components/custom/Slider";
import TeamCard from "@/components/custom/TeamCard";
import Poster from "@/components/Poster";
import SignUpSection from "@/components/SignUpSection";
import { team } from "@/constants";
import {
  aboutMobilePoster1,
  aboutMobilePoster2,
  aboutMobilePoster3,
  aboutMobilePoster4,
  aboutPoster1,
  aboutPoster2,
  aboutPoster3,
  aboutPoster4,
} from "@/constants/Images";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      {/* page heading */}
      <div className="flex flex-col text-center lg:py-16 py-12">
        <h1 className="heading-8 uppercase font-semibold tracking-wider text-warm-black mb-4">
          about moon
        </h1>
        <h1 className="text-display-2 text-neutral-7">
          Moon handmade ceramic products
          <span className="lg:hidden inline">
            {" "}
            <br />{" "}
          </span>
          have been around
          <span className="hidden md:inline">
            {" "}
            <br />{" "}
          </span>
          since 1650, let us
          <span className="lg:hidden inline">
            {" "}
            <br />{" "}
          </span>
          explore our journey
        </h1>
      </div>

      {/* posters */}
      <Poster
        imageDesktop={aboutPoster1}
        imageMobile={aboutMobilePoster1}
        flipImage
      >
        <>
          <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
            1910
          </h1>

          <p className="lg:text-display-3 text-display-2 text-neutral-7 lg:mb-8 mb-6 lg:px-6 px-4">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices
          </p>
        </>
      </Poster>

      <Poster
        imageDesktop={aboutPoster2}
        imageMobile={aboutMobilePoster2}
        imageLeft
        flipImage
      >
        <>
          <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
            1990
          </h1>

          <p className="lg:text-display-3 text-display-2 text-neutral-7 lg:mb-8 mb-6 lg:px-6 px-4">
            Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.
            dolor sit amet consectetur adipiscing eli mattis sit phasellus
            mollis sit aliquam sit
          </p>

          <p className="text-display-2 font-semibold underline uppercase text-warm-black tracking-wide cursor-pointer">
            learn more
          </p>
        </>
      </Poster>

      <Poster
        imageDesktop={aboutPoster3}
        imageMobile={aboutMobilePoster3}
        flipImage
      >
        <>
          <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
            2010
          </h1>

          <p className="lg:text-display-3 text-display-2 text-neutral-7 lg:mb-8 mb-6 lg:px-6 px-4">
            Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
            tempus. sit aliquam sit nullam neque ultrices.
          </p>

          <p className="text-display-2 font-semibold underline uppercase text-warm-black tracking-wide cursor-pointer">
            learn more
          </p>
        </>
      </Poster>

      {/* how we work */}
      <div className="lg:mt md:mt-16 mt-12">
        <Poster
          imageDesktop={aboutPoster4}
          imageMobile={aboutMobilePoster4}
          imageLeft
          flipImage
        >
          <div className="text-left lg:pl-0 pl-6">
            <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
              How we works
            </h1>

            <div className="">
              <h3 className="text-display-3 font-semibold text-neutral-8 mb-1">
                Product design
              </h3>

              <p className="para-base text-neutral-7">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-display-3 font-semibold text-neutral-8 mb-1">
                Product design
              </h3>

              <p className="para-base text-neutral-7">
                Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
                tempus.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-display-3 font-semibold text-neutral-8 mb-1">
                Sell products
              </h3>

              <p className="para-base text-neutral-7">
                Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
                nisi.
              </p>
            </div>
          </div>
        </Poster>
      </div>

      {/* Team */}
      <div className="lg:mx-32 px-2 lg:py-20 py-12">
        <div className="text-center lg:mb-12 mb-6 uppercase lg:heading-8 heading-6 font-semibold tracking-wider text-warm-black">
          meet our team
        </div>

        <div className="hidden md:grid grid-cols-4 lg:gap-8 md:gap-4">
          {team.map((teamMember, index) => (
            <TeamCard key={index} teamMember={teamMember} />
          ))}
        </div>

        <div className="md:hidden">
          <CustomSlider items={team}>
            {team.map((teamMember, index) => (
              <TeamCard key={index} teamMember={teamMember} />
            ))}
          </CustomSlider>
        </div>
      </div>

      <SignUpSection />
    </div>
  );
};

export default page;
