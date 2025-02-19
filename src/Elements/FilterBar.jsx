import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import filterProduct from "../Utils/filterProduct.js";
const { colorCategories, sizeCategories, productCategories } = filterProduct;

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isSizeopen, setISizeopen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [checkedSizeItems, setCheckedSizeItems] = useState({});

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  const togglePrice = () => {
    setIsPriceOpen((prev) => !prev);
  };
  const toggleSize = () => {
    setISizeopen((prev) => !prev);
  };
  const toggleColor = () => {
    setIsColorOpen((prev) => !prev);
  };

  const handleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePriceCheck = (id) => {
    setCheckedSizeItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="md:flex flex-col  overflow-auto items-start px-4 py-2 space-y-2 h-screen w-[315px] shadow-xl bg-gray-100 ">
      <div className="flex flex-col">
        <div className="flex items-center cursor-pointer w-[200px] justify-between">
          <p>Product Categories</p>
          <IoIosArrowDown
            onClick={toggleList}
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <>
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="flex gap-2 items-center w-[200px] justify-between"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={category.id}
                    className="accent-black cursor-pointer"
                    checked={checkedItems[category.id] || false}
                    onChange={() => handleCheck(category.id)}
                  />
                  <label
                    className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
                    htmlFor={category.id}
                  >
                    {category.label}
                  </label>
                </div>

                <LuPlus aria-label="Add" />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col  ">
        <div className="flex items-center cursor-pointer w-[200px] justify-between">
          <p>Filter by Price</p>
          <IoIosArrowDown
            onClick={togglePrice}
            className={`w-4 h-4 transition-transform ${
              isPriceOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isPriceOpen && (
          <div className="flex flex-col gap-2 mt-1">
            <label
              for="small-range"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price: $0-$2000
            </label>
            <input
              id="small-range"
              type="range"
              value="50"
              class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center cursor-pointer w-[200px] justify-between">
          <p>Filter By Size</p>
          <IoIosArrowDown
            onClick={toggleSize}
            className={`w-4 h-4 transition-transform ${
              isSizeopen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isSizeopen && (
          <>
            {sizeCategories.map((category) => (
              <div
                key={category.id}
                className="flex gap-2 items-center w-[200px] justify-between"
              >
                <div className="flex items-center justify-between w-full gap-2">
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      id={category.id}
                      className="accent-black cursor-pointer"
                      checked={checkedSizeItems[category.id] || false}
                      onChange={() => handlePriceCheck(category.id)}
                    />
                    <label
                      className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
                      htmlFor={category.id}
                    >
                      {category.label}
                    </label>
                  </div>

                  <label
                    className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
                    htmlFor={category.id}
                  >
                    ({category.qualtity})
                  </label>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center cursor-pointer w-[200px] justify-between">
          <p>Filter By Color</p>
          <IoIosArrowDown
            onClick={toggleColor}
            className={`w-4 h-4 transition-transform ${
              isColorOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isColorOpen && (
          <>
            {colorCategories.map((category) => (
              <div
                key={category.id}
                className="flex gap-2 items-center w-[200px] justify-between"
              >
                <div className="flex items-center justify-between w-full gap-2">
                  <div className="flex gap-3 items-center">
                    <div
                      style={{ backgroundColor: category.color }}
                      className="w-4 h-4 rounded-[4px] border border-gray-300 cursor-pointer"
                      onClick={() => handlePriceCheck(category.id)}
                    />
                    <label
                      className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
                      htmlFor={category.id}
                    >
                      {category.label}
                    </label>
                  </div>

                  <label
                    className="cursor-pointer text-gray-700 hover:text-black hover:font-medium transition duration-300"
                    htmlFor={category.id}
                  >
                    ({category.qualtity})
                  </label>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
