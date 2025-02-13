import React from "react";
import kristLogo from "../../assets/kristlog.svg";
import Button from "./Button.jsx";
import upArrow from "../../assets/arrow-up.svg";
import { useState } from "react";
import shoppingBag from "../../assets/shoppingBag.png";
import favourite from "../../assets/favourite.png";
import searchSvg from "../../assets/search.svg";
import SideBar from "./SideBar.jsx";
import { FaBars } from "react-icons/fa6";

import categories from "../Utils/shopByCatData.js";

const Navbar = () => {
  const [openBar, setopenBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };
  const openSideBar = () => {
    setopenBar((prev) => !prev);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm  dark:bg-neutral-800">
      <nav className="max-w-[103rem] w-full relative mx-auto flex flex-wrap basis-full py-1 lg:py-4 items-center px-8 justify-between">
        <a
          className="sm:order-1 flex justify-center items-center text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
          href="#"
        >
          <img src={kristLogo} className="h-[25px] xl:h-[40px] xl:w-[40px]" />
          <p className="text-black text-[25px] xl:text-[40px]">Krist</p>
        </a>
        <div className="sm:order-3 flex justify-between items-center gap-2 xl:gap-8">
          <img
            src={searchSvg}
            className="cursor-pointer h-[20px] w-[20px] xl:w-[30px] xl:h-[30px]"
          />
          <img
            src={favourite}
            className="cursor-pointer h-[20px] w-[20px] xl:w-[30px] xl:h-[30px]"
          />
          <img
            src={shoppingBag}
            className="cursor-pointer h-[20px] w-[20px] xl:w-[30px] xl:h-[30px]"
          />
          <div className="flex items-center  gap-4 px-2 xl:px-7  lg:hidden">
            <FaBars
              onClick={openSideBar}
              className="cursor-pointer relative "
            />

            {openBar && (
              <div className="fixed top-0 right-0 z-[999]">
                <button
                  type="button"
                  onClick={openSideBar}
                  className="text-gray-400 absolute bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 top-5 end-20 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
                <SideBar />
              </div>
            )}
          </div>

          <Button text="Login" baseDisplay="hidden" />
        </div>
        <div
          id="hs-navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
          aria-labelledby="hs-navbar-alignment-collapse"
        >
          <div className=" hidden lg:flex gap-12 items-center">
            <a
              className="font-medium text-[25px] text-gray-600 focus:outline-none"
              href="#"
              aria-current="page"
            >
              Home
            </a>

            <div
              onClick={toggleList}
              className="flex justify-center items-center gap-3 cursor-pointer mx-auto "
            >
              <a
                className="font-medium text-gray-600 text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                href="#"
              >
                Shop
              </a>
              <img
                src={upArrow}
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
              className="font-medium text-gray-600 text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Our Story
            </a>
            <a
              className="font-medium text-gray-600 text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Blog
            </a>
            <a
              className="font-medium text-gray-600 text-[25px] hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
