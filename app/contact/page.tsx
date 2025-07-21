import ContactForm from "@/components/ContactForm";
import SocialMedia from "@/components/custom/SocialMedia";
import Hero from "@/components/Hero";
import {
  contactHeroDesktop,
  contactHeroMobile,
  contactMap,
  logoBrown,
} from "@/constants/Images";
import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      {/* hero */}
      <Hero
        heroImg={contactHeroDesktop}
        heroImgMobile={contactHeroMobile}
        logo={logoBrown}
        posterColor="bg-warm-black"
      >
        <h1 className="mt-4 lg:w-full heading-7 text-center font-bold text-neutral-2 uppercase tracking-wider">
          contact us
        </h1>

        <div className="bg-neutral-2 h-[0.7px] w-2/3 my-8"></div>

        <div className="flex flex-col items-center">
          <div className="text-display-2 font-semibold text-neutral-2">
            Follow us on social media
          </div>

          <div className="flex items-center gap-4 mt-3">
            <SocialMedia
              icon={<FaFacebookF className="text-neutral-2 text-base" />}
            />

            <SocialMedia
              icon={<BsYoutube className="text-neutral-2 text-base" />}
            />

            <SocialMedia
              icon={<FaTwitter className="text-neutral-2 text-base" />}
            />

            <SocialMedia
              icon={<AiFillInstagram className="text-neutral-2 text-base" />}
            />

            <SocialMedia
              icon={<FaLinkedinIn className="text-neutral-2 text-base" />}
            />
          </div>
        </div>
      </Hero>
      {/* heading */}
      <div className="flex flex-col text-center lg:py-16 py-12">
        <h1 className="lg:heading-8 heading-7 uppercase font-semibold tracking-wider text-warm-black mb-4 lg:px-0 px-6">
          get in touch with us
        </h1>
        <p className="para-2 text-neutral-7 px-12">
          Lorem ipsum dolor sit amet sit phasellus
          <span className="lg:hidden inline">
            {" "}
            <br />{" "}
          </span>
          consectetur adipiscing eli
          <span className="hidden md:inline">
            {" "}
            <br />{" "}
          </span>
          mattis sit phasellus mollis sit aliquam sit nullam.
        </p>
      </div>
      {/* timing */}
      <div className="text-center flex flex-col gap-7 ">
        <div className="">
          <div className="capitalize text-display-2 text-neutral-7 font-semibold">
            Office hours:
          </div>

          <div className="mt-1 text-light-brown text-display-2 font-semibold">
            Monday - Friday 8:00 am to 5:00 pm
          </div>
        </div>

        <div className="">
          <div className="capitalize text-display-2 text-neutral-7 font-semibold">
            Email:
          </div>

          <div className="mt-1 text-light-brown text-display-2 font-semibold">
            contact@company.com
          </div>
        </div>

        <div className="">
          <div className="capitalize text-display-2 text-neutral-7 font-semibold">
            Phone:
          </div>

          <div className="mt-1 text-light-brown text-display-2 font-semibold">
            (414) 687 - 5892
          </div>
        </div>

        <div className="">
          <div className="capitalize text-display-2 text-neutral-7 font-semibold">
            Location
          </div>

          <div className="mt-1 text-light-brown text-display-2 font-semibold">
            59 Middle Point Rd
            <br />
            San Francisco, 80412
          </div>
        </div>
      </div>
      {/* Form */}
      <ContactForm />
      <div className="relative w-full h-[400px] lg:h-[500px] ">
        <Image
          src={contactMap}
          alt="moon map"
          fill
          className="absolute bottom-0 object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Contact;
