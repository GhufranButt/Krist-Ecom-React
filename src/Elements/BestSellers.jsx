import React from "react";
import bestProduct from "../Utils/bestSellerData.js";
import { FiEye } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";

const BestSellers = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-[30px] barlow-bold">Our Bestsellers</h1>
      <div className="grid grid-cols-4 gap-10 justify-center items-center">
        {bestProduct.map((obj) => {
          return (
            <div className="flex flex-col gap-2 relative group">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-lg h-[350px] w-[280px] p-4 flex items-center justify-center relative">
                <img
                  src={obj.image}
                  className="w-full h-auto max-h-full object-cover rounded-lg"
                  alt="Product"
                />
                <div className="flex absolute right-5  top-10 flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="bg-white rounded-full button p-1 shadow-md">
                    <CiStar size={20} />
                  </div>
                  <div className="bg-white rounded-full button p-1 shadow-md">
                    <HiMiniArrowsRightLeft size={20} />
                  </div>
                  <div className="bg-white rounded-full button p-1 shadow-md">
                    <FiEye size={20} />
                  </div>
                </div>
                <button className="absolute bottom-5 left-[50%] -translate-x-1/2 w-[60%] p-2 rounded-[9px] button text-[13px] bg-white text-gray-600 font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 shadow-md">
                  Add to Cart
                </button>
              </div>

              <p className="text-[20px] barlow-bold">{obj.brand}</p>
              <p className="text-[15px] barlow-medium">{obj.name}</p>
              <div className="flex gap-2">
                <p>{obj.price}</p>
                <p className="text-gray-400 line-through decoration-gray-400">
                  {obj.disCountPrice}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
