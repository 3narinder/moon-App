"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NAV_LINKS, NAV_ICONS_NAVBAR, NAV_ICONS_DROPDOWN } from "@/constants";
import Button from "./custom/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: session } = useSession();

  const getInitial = (name?: string | null) =>
    name ? name[0]?.toUpperCase() : "";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md py-5 lg:px-32 px-8 flex items-center justify-between z-50 border border-b-neutral-5">
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex items-center z-50">
        <Image
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          src="/icons/Menu.png"
          alt="Icon_menu"
          width={20}
          height={20}
        />
      </div>

      {/* Logo */}
      <Link className="z-50" href="/">
        <Image src="/images/logo-full.png" alt="Logo" width={145} height={39} />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="lg:flex  items-center gap-14 hidden ml-32">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-display-2 cursor-pointer transform transition duration-200 ease-in-out hover:scale-105"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white flex flex-col items-center pt-10 gap-4 shadow-lg z-40"
          >
            <div className="flex flex-col gap-4 md:w-1/3 w-full md:px-0 px-4">
              {NAV_LINKS?.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="text-display-2 text-neutral-7 uppercase tracking-wide font-semibold transform transition duration-200 ease-in-out hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={link?.icon}
                      alt={link.name}
                      width={20}
                      height={20}
                    />

                    <span className="mt-1">{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="md:w-1/3 w-full md:px-0 px-4">
              <Button onClick={() => signOut()} text="Logout" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Auth & Cart Icons */}
      <div className="flex lg:hidden items-center gap-2 z-50">
        {/* Auth - Google icon or Initial */}
        {session?.user ? (
          <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-bold text-neutral-800">
            {getInitial(session?.user?.name)}
          </div>
        ) : (
          <button onClick={() => signIn("google")}>
            <FaGoogle className="w-5 h-5 text-neutral-700" />
          </button>
        )}

        {/* Cart Icon */}
        <Link href="/cart">
          <Image
            src="/icons/shopping_cart.png"
            alt="Cart"
            width={24}
            height={24}
          />
        </Link>
      </div>

      {/* Right Icons & Auth Button */}
      <div className="relative items-center gap-4 hidden lg:flex">
        <div className="flex items-center gap-2">
          {NAV_ICONS_NAVBAR?.filter((icon) => {
            if (icon.alt === "Profile" && !session?.user) return false;
            return true;
          }).map((icon, index) => {
            const isSearch = icon.alt === "Search";
            const isProfile = icon.alt === "Profile";

            const commonClass = isSearch
              ? "hidden lg:flex"
              : isProfile
              ? "hidden lg:flex cursor-pointer"
              : "flex";

            return isProfile ? (
              <div
                key={index}
                className={`relative ${commonClass}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-48 py-2 z-50">
                    {NAV_ICONS_DROPDOWN.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={18}
                          height={18}
                        />
                        <span>{item.alt}</span>
                      </Link>
                    ))}

                    <div className="px-2">
                      <Button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          signOut();
                        }}
                        text="Logout"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={icon.href}
                className={`relative items-center justify-center w-10 h-10 ${commonClass}`}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Link>
            );
          })}
        </div>

        {/* Auth Section */}
        <div className="lg:flex items-center gap-3 hidden">
          {session?.user ? (
            <>
              <span className="hidden lg:block text-display-2 font-semibold  text-neutral-7 capitalize">
                Welcome, {session?.user?.name?.split(" ")[0]}
              </span>
            </>
          ) : (
            <Button
              onClick={() => signIn("google")}
              text="Google Login"
              icon={<FaGoogle />}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
