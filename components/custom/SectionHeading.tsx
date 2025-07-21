import React from "react";

interface SectionHeadingProps {
  text: string;
  alignStart?: boolean;
}

const SectionHeading = ({ text, alignStart }: SectionHeadingProps) => {
  return (
    <div
      className={`lg:heading-7 heading-6 text-warm-black uppercase font-semibold ${
        alignStart ? "test-start lg:ml-0 ml-4" : "text-center"
      } mb-8 lg:tracking-wider`}
    >
      {text}
    </div>
  );
};

export default SectionHeading;
