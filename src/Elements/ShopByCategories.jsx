import React, { useState, useRef } from "react";
import categories from "../Utils/helper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ShopByCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className=" flex gap-20  items-center justify-center xl:justify-around ">
        <h1 className="text-black items-center justify-center text-[15px] xl:text-[30px] font-bold">
          Shop By Categories
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
            className={`px-5 py-3 rounded-[9px] xl:px-6 xl:py-4 shadow-lg xl:rounded-[15px] duration-300 ease-in-out transform hover:scale-105 text-white cursor-pointer ${
              currentSlide === 0 ? "bg-gray-200" : "bg-black"
            }`}
          >
            <FaArrowLeftLong color={currentSlide === 0 ? "black" : "white"} />
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
            className={`px-5 py-3 rounded-[9px] xl:px-6 xl:py-4 xl:rounded-[15px] duration-300 ease-in-out transform hover:scale-105 text-white cursor-pointer ${
              currentSlide === categories.length - 3
                ? "bg-gray-200"
                : "bg-black"
            }`}
          >
            <FaArrowRightLong
              color={currentSlide === categories.length - 3 ? "black" : "white"}
            />
          </button>
        </div>
      </div>
      <div className=" px-5 py-5  h-full w-full flex justify-center items-center">
        <div className="  w-[80%]">
          <Slider ref={sliderRef} {...settings}>
            {categories.map((obj, ind) => (
              <div
                key={ind}
                className=" h-[400px] w-[130px] xl:h-[650px] xl:w-[200px] relative flex justify-center items-center"
              >
                <div className="bg-black opacity-[50%] w-full h-full hover:opacity-0 transition-all duration-500   absolute"></div>
                <img src={obj.image} className="w-full h-full" />
                <button className="w-[60%] p-2 rounded-[9px] text-[15px] xl:px-4 xl:py-3 xl:rounded-[15px] xl:text-[20px] cursor-pointer absolute bg-[#FFFFFF] xl:w-[60%]  bottom-10 left-[50%] -translate-x-1/2 text-center text-gray-600 font-semibold">
                  {obj.name}
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
