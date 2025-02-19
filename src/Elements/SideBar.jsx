import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import categories from "../Utils/shopByCatData";

const SideBa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="h-screen w-[315px] shadow-xl bg-gray-100">
      <div className="flex flex-col gap-5 xl:gap-12 items-start  p-7">
        <a
          className="font-medium text-[18px] xl:text-[25px] text-gray-600 focus:outline-none"
          href="#"
          aria-current="page"
        >
          Home
        </a>

        <div
          onClick={toggleList}
          className="flex justify-center items-center gap-3 cursor-pointer "
        >
          <a
            className="font-medium text-gray-600 text-[18px] xl:text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="#"
          >
            Shop
          </a>

          <MdKeyboardArrowDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />

          {isOpen && (
            <div className="bg-[#FFFFFF] flex flex-col lg:flex-row items-start text-white shadow-xl ring-2 ring-slate-100 absolute top-20 left-32 px-5 py-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 border-gray-200 px-4 ${
                    index === 0
                      ? "border-r"
                      : index !== categories.length
                      ? "border-l"
                      : ""
                  }`}
                >
                  <h3 className="font-bold text-lg text-black">
                    {category.name}
                  </h3>
                  <div className="flex flex-col text-gray-600 gap-3">
                    {category.items.map((item, i) => (
                      <p key={i} className="text-nowrap text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <a
          className="font-medium text-gray-600 text-[18px] xl:text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#"
        >
          Our Story
        </a>
        <a
          className="font-medium text-gray-600 text-[18px] xl:text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#"
        >
          Blog
        </a>
        <a
          className="font-medium text-gray-600 text-[18px] xl:text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default SideBa;
