import React, { useState } from "react";
import Navbar from "../../Elements/Navbar.jsx";
import Footer from "../../Elements/Footer.jsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

const ProductCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const productCategories = [
    { id: "menCheckBox", label: "Men" },
    { id: "womenCheckBox", label: "Women" },
    { id: "kidsCheckBox", label: "Kids" },
    { id: "bagsCheckBox", label: "Bags" },
    { id: "beltsCheckBox", label: "Belts" },
    { id: "walletsCheckBox", label: "Wallets" },
    { id: "watchesCheckBox", label: "Watches" },
    { id: "accessoriesCheckBox", label: "Accessories" },
  ];

  const handleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex items-center text-gray-500 text-[12px] barlow-regular">
            <p>Shop</p>
            <MdKeyboardArrowRight />
            <p>All Products</p>
          </div>
          <div>
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
          </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategories;
