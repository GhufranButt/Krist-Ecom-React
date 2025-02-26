import React, { useEffect, useState } from "react";
import Navbar from "../../Elements/Navbar.jsx";
import Footer from "../../Elements/Footer.jsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { allProducts } from "../../apiCalls/products/products.js";
import { IoFilterSharp } from "react-icons/io5";
import { addCart } from "../../apiCalls/cart/cart.js";
import KirstBenefits from "../../Elements/KirstBenefits.jsx";
import FilterBar from "../../Elements/FilterBar.jsx";
import filterProduct from "../../Utils/filterProduct.js";
const { colorCategories, sizeCategories, productCategories } = filterProduct;
import { useNavigate } from "react-router-dom";
import { addWishList } from "../../apiCalls/wishlist/wishList.js";

const ProductCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isSizeopen, setISizeopen] = useState(false);
  const [isFilterOpen, setIsFilterOpne] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [productData, setproductData] = useState([]);
  const [checkedSizeItems, setCheckedSizeItems] = useState({});

  const navigate = useNavigate();

  const handleProductDetail = (id) => {
    navigate(`/product-details/${id}`);
  };

  const openFilterBar = () => {
    setIsFilterOpne((prev) => !prev);
  };

  const handleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addtowishList = (id) => {
    addWishList(id);
  };

  const addToCart = (obj) => {
    addCart(obj);
  };

  const handlePriceCheck = (id) => {
    setCheckedSizeItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

  useEffect(() => {
    const xyz = async () => {
      try {
        const productArr = await allProducts();
        setproductData(productArr.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    xyz();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-4 mt-8 px-3">
        <div className="hidden lg:flex flex-col items-start gap-5">
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

          <div className="flex flex-col gap-3 items-center">
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
              <>
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
              </>
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

        <div className="px-4 lg:hidden">
          <IoFilterSharp
            onClick={openFilterBar}
            className="cursor-pointer relative "
          />

          {isFilterOpen && (
            <div className="flex flex-col  fixed z-[9999999] top-0 right-0 bg-gray-100">
              <button
                type="button"
                onClick={openFilterBar}
                className="text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 top-5 end-20 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <FilterBar />
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
          {productData.map((obj) => (
            <div
              className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative group"
              key={obj.id}
            >
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer  shadow-lg lg:h-[300px] xl:h-[350px] xl:w-[280px] p-4 flex items-center justify-center relative">
                <img
                  src={obj.images}
                  className="w-full h-auto max-h-full object-cover rounded-lg"
                  alt="Product"
                />
                <div className="flex absolute right-5 top-10 flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div
                    onClick={() => addtowishList(obj._id)}
                    className="bg-white rounded-full button p-1 shadow-md"
                  >
                    <CiStar size={20} />
                  </div>
                  <div className="bg-white rounded-full button p-1 shadow-md">
                    <HiMiniArrowsRightLeft size={20} />
                  </div>
                  <div
                    onClick={() => handleProductDetail(obj._id)}
                    className="bg-white rounded-full button p-1 shadow-md"
                  >
                    <FiEye size={20} />
                  </div>
                </div>
                <button
                  onClick={() => addToCart(obj)}
                  className="absolute bottom-5 left-[50%] -translate-x-1/2 w-[60%] p-2 rounded-[9px] button text-[13px] bg-white text-gray-600 font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 shadow-md"
                >
                  Add to Cart
                </button>
              </div>
              <p className="text-[20px] barlow-bold mt-2">{obj.brandName}</p>
              <p className="text-[15px] barlow-medium">{obj.productName}</p>
              <div className="flex gap-2">
                <p>${obj.price}</p>
                <p className="text-gray-400 line-through decoration-gray-400">
                  ${obj.discountedPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <KirstBenefits />
      <Footer />
    </div>
  );
};

export default ProductCategories;
