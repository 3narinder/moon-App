import React from "react";
import Button from "./custom/Button";

const SignUpSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center lg:py-20 md:py-16 py-8 md:px-0 lg:px-0 px-10">
      <h3 className="text-display-3 text-neutral-7 font-semibold mb-2">
        Sign up for email
      </h3>

      <h1 className="lg:heading-7 font-semibold heading-6 uppercase tracking-wider lg:mb-6 mb-2">
        for news,
        <span className="lg:hidden inline">
          {" "}
          <br />
        </span>
        collections and more
      </h1>

      <input
        type="email"
        placeholder="Enter your email address"
        className="placeholder:text-[16px] placeholder:text-neutral-7 placeholder:text-center text-center w-96 py-2 px-4 outline-none border-b border-neutral-1"
      />

      <div className="w-32 mt-8">
        <Button variant="border" text="Sign up" />
      </div>
    </section>
  );
};

export default SignUpSection;
