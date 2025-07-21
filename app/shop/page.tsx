"use client";

import Breadcrumb from "@/components/Breadcrum";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import { products, sortItems } from "@/constants";
import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="lg:px-32 py-8 items-start mb-4 relative">
      <Breadcrumb />
      <div className="flex gap-4">
        {/* Filter Section - Large screens */}
        <div className="lg:w-1/5 lg:flex lg:flex-col hidden">
          <div className="text-display-3 font-semibold text-neutral-8 pb-6 border-b border-neutral-8 w-full">
            Showing {products.length} items
          </div>
          <Filter />
        </div>

        {/* List Section */}
        <div className="lg:w-4/5 w-full lg:pl-8 lg:pr-4">
          {/* Filter + Sort row */}
          <div className="flex items-center justify-between lg:justify-end lg:mb-7 mb-4 lg:px-12 px-4">
            {/* Filter icon (mobile only) */}
            <div
              className="flex items-center gap-1 lg:hidden cursor-pointer"
              onClick={() => setIsFilterOpen(true)}
            >
              <IoFilter />
              <div className="capitalize text-display-2 tracking-wider">
                Filter
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-display-1 text-neutral-8">
              <label>Sort by:</label>
              <div className="relative">
                <select className="lg:w-32 w-28 outline-none">
                  {sortItems.map((item) => (
                    <option key={item.id} className="capitalize">
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Item count on small screens */}
          <div className="text-display-1 font-semibold text-neutral-8 pb-4 w-full lg:hidden mx-4 tracking-wider">
            Showing {products.length} items
          </div>

          <ProductList limit={12} />

          <div className="relative lg:mt-8 mt-4 flex items-center md:justify-end justify-center lg:pr-12">
            <Pagination />
          </div>
        </div>
      </div>

      {/* Overlay + Slide-in Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-500 ease-in-out ${
          isFilterOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          onClick={() => setIsFilterOpen(false)}
        ></div>

        {/* Slide-in drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl p-6 flex flex-col justify-between transform transition-transform duration-500 ease-in-out ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Arrow */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-neutral-8 text-xl"
            >
              <IoArrowBack />
            </button>
          </div>

          {/* Filter content */}
          <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
            <Filter />
          </div>

          {/* Apply button */}
          <button
            onClick={() => setIsFilterOpen(false)}
            className=" bg-black text-white py-2 px-4 rounded-md w-full"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
