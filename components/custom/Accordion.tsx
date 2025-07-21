import React from "react";
import { motion } from "framer-motion";

interface AccordionProps {
  title: string;
  detail: string[];
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ title, detail, isOpen, onClick }: AccordionProps) => {
  return (
    <div className="border-b border-neutral-5">
      <button className="w-full text-left py-3 capitalize flex justify-between items-center">
        <div className="text-warm-black text-display-3 font-semibold">
          {title}
        </div>
        <span className="cursor-pointer" onClick={onClick}>
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <ul className="space-y-1 text-display-2  text-warm-black px-4 pb-2">
          {detail.map(
            (item, index) =>
              item && (
                <li key={index} className="">
                  • {item}
                </li>
              )
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export default Accordion;
