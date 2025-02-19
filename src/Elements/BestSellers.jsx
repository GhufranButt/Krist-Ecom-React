import React, { useState, useRef } from "react";
import bestProduct from "../Utils/bestSellerData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiEye } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BestSellers = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleProductDetail = () => {
    navigate("/product-details");
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  console.log("current slide", currentSlide);

  return (
    <div className="flex flex-col justify-center py-3 items-center gap-5">
      <div className="flex items-center gap-14 sm:gap-[300px]">
        <h1 className="text-[20px] sm:text-[25px] xl:text-[30px] barlow-bold">
          Our Bestsellers
        </h1>

        <div className="flex gap-3 lg:hidden">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
            className={`px-5 py-3 rounded-[9px] xl:px-6 xl:py-4 shadow-lg xl:rounded-[15px] button text-white ${
              currentSlide === 0 ? "bg-gray-200" : "bg-black"
            }`}
          >
            <FaArrowLeftLong color={currentSlide === 0 ? "black" : "white"} />
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
            className={`px-5 py-3 rounded-[9px] xl:px-6 xl:py-4 xl:rounded-[15px] button text-white ${
              currentSlide === bestProduct.length - 3
                ? "bg-gray-200"
                : "bg-black"
            }`}
          >
            <FaArrowRightLong
              color={
                currentSlide === bestProduct.length - 3 ? "black" : "white"
              }
            />
          </button>
        </div>
      </div>

      <div
        onClick={handleProductDetail}
        className="hidden lg:grid grid-cols-4 lg:px-10 gap-10 justify-center items-center"
      >
        {bestProduct.map((obj) => (
          <div className="flex flex-col gap-2 relative group" key={obj.id}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer  shadow-lg lg:h-[300px] xl:h-[350px] xl:w-[280px] p-4 flex items-center justify-center relative">
              <img
                src={obj.image}
                className="w-full h-auto max-h-full object-cover rounded-lg"
                alt="Product"
              />
              <div className="flex absolute right-5 top-10 flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <div className="bg-white rounded-full button p-1 shadow-md">
                  <CiStar size={20} />
                </div>
                <div className="bg-white rounded-full button p-1 shadow-md">
                  <HiMiniArrowsRightLeft size={20} />
                </div>
                <div
                  onClick={handleProductDetail}
                  className="bg-white rounded-full button p-1 shadow-md"
                >
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
        ))}
      </div>

      <div className="lg:hidden justify-center items-center w-[280px] sm:w-[600px] md:w-[700px]">
        <Slider ref={sliderRef} {...settings}>
          {bestProduct.map((obj) => (
            <div
              className="flex flex-col gap-2 sm:px-2 md:px-10 relative group"
              key={obj.id}
            >
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-lg h-[350px] w-[280px] p-4 flex items-center justify-center relative">
                <img
                  src={obj.image}
                  className="w-full h-auto max-h-full object-cover rounded-lg"
                  alt="Product"
                />
                <div className="flex absolute right-5 top-10 flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
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
              <p className="text-[20px] mt-1 barlow-bold">{obj.brand}</p>
              <p className="text-[15px] barlow-medium">{obj.name}</p>
              <div className="flex gap-2">
                <p>{obj.price}</p>
                <p className="text-gray-400 line-through decoration-gray-400">
                  {obj.disCountPrice}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;
