import Breadcrumb from "@/components/Breadcrum";
import Button from "@/components/custom/Button";
import InputField from "@/components/custom/InputField";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const page = () => {
  return (
    <section className="lg:mx-40 mx-6 py-8">
      <Breadcrumb />

      <div className="flex justify-between gap-8">
        {/* left  form */}
        <div className="w-2/3">
          <div className="text-display-3 font-semibold text-neutral-8 pb-10 w-full">
            Billing Details
          </div>

          <form>
            {/* Names */}
            <div className="flex gap-5">
              <InputField type="text" label="First Name" name="firstName" />

              <InputField type="text" label="Last Name" name="lastName" />
            </div>

            {/* street address */}
            <InputField
              type="text"
              label="Street Address"
              name="streetAddress"
              className="mt-5"
            />

            {/* address */}
            <div className="flex gap-5 mt-5">
              <InputField type="text" label="Town/City" name="TownCity" />

              <InputField type="text" label="State" name="state" />
            </div>

            {/* address2 */}
            <div className="flex gap-5 mt-5">
              <InputField type="number" label="ZIP Code" name="zipCode" />

              <InputField type="number" label="Phone" name="phone" />
            </div>

            {/* Email*/}
            <InputField
              type="email"
              label="Email"
              name="email"
              className="mt-5"
            />

            <InputField
              isTextArea
              type="textarea"
              label="Other notes"
              name="notes"
              className="mt-5"
            />
          </form>

          <div className="flex items-center justify-between mt-6">
            <Link
              href="/cart"
              className="text-sm flex items-center gap-1 hover:text-warm-black"
            >
              <IoIosArrowBack className="cursor-pointer" />
              Return to cart
            </Link>

            <div className="">
              <Button
                text="Continue to shopping"
                icon={<FaArrowRight className="text-neutral-2 text-xs" />}
              />
            </div>
          </div>
        </div>

        {/* Right product details */}
        <div className="w-1/3">
          <div className="text-display-3 font-semibold text-neutral-8 pb-6 w-full">
            Products
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
