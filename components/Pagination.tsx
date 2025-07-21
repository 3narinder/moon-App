import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex items-center gap-3 mt-4">
      {/* Previous Button */}
      <MdKeyboardArrowLeft className="text-2xl text-warm-black cursor-pointer" />

      {/* Page Numbers */}
      {[1, 2, 3, 4, 5]?.map((page) => (
        <button
          key={page}
          className={`w-10 h-10 flex items-center justify-center  cursor-pointer
            ${page === 1 && "bg-warm-black text-white"}
            ${page === 2 && "text-warm-black border border-warm-black"}
            `}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <MdKeyboardArrowRight className="text-2xl text-warm-black cursor-pointer" />
    </div>
  );
};

export default Pagination;
