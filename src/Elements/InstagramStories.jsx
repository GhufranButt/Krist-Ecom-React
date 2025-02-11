import React, { useState, useRef } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiDollarCircle } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FaHeadphones } from "react-icons/fa6";
import { LuCreditCard } from "react-icons/lu";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import model1Img from "../../assets/model1.jpg";
import model2Img from "../../assets/model2.jpg";
import model3Img from "../../assets/model3.jpg";
import model4Img from "../../assets/model4.jpg";

const images = [model1Img, model2Img, model4Img, model3Img];

const InstagramStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="flex-flex-col py-10 px-5 space-y-10">
      <p className="text-[28px] text-center  barlow-semibold ">
        Our Instagram Stories
      </p>

      <div className="flex flex-col gap-4  justify-center items-center">
        <div className=" grid grid-cols-2 md:grid-cols-4 justify-center gap-10">
          {images.map((img) => {
            return (
              <div className="relative group">
                <img
                  src={img}
                  className=" flex relative hover:opacity-[80%] h-full object-cover w-[250px]"
                />
                <div className="absolute top-1/2 -translate-y-1/2 button bg-[#ffff] rounded-full p-2 left-[50%] -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <GrInstagram size={25} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center gap-[40px] xl:gap-[93px]">
          <div className="flex flex-col gap-2 barlow-regular w-[200px] ">
            <LiaShippingFastSolid size={35} />
            <div>
              <p className="barlow-bold text-[20px]">Free Shipping</p>
              <p className="barlow-regular">Free Shipping for Above $150</p>
            </div>
          </div>
          <div className="flex gap-2 flex-col w-[220px]">
            <BiDollarCircle size={35} />
            <div>
              <p className="barlow-bold text-[20px]">Money Gurantee</p>
              <p className="barlow-regular">Within 30 days for an exchange</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[210px]">
            <FaHeadphones size={35} />
            <div>
              <p className="barlow-bold text-[20px]">Online Support</p>
              <p className="barlow-regular">24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[210px] ">
            <LuCreditCard size={35} />
            <div>
              <p className="barlow-bold text-[20px]">Flexible Payment</p>
              <p className="barlow-regular">Pay with multiple credit cards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramStories;
