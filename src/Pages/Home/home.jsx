import react, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Elements/Navbar";
import BannerImg from "../../../assets/HomeBannerImg.png";
import categories from "../../Utils/helper.js";
import rightArrow from "../../../assets/rightArrow.png";
import leftArrow from "../../../assets/leftArrow.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (currentSlide) => setCurrentSlide(currentSlide + 1),
  };

  console.log("currentVals", currentSlide);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <div className="px-6">
          <img src={BannerImg} />
        </div>
      </div>
      <div className=" flex gap-5 container justify-between ">
        <h1 className="text-black text-[30px] font-bold">Shop By Categories</h1>

        <div className="flex gap-3">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
            className={`px-6 py-4 shadow-lg rounded-[15px] duration-300 ease-in-out transform hover:scale-105 text-white cursor-pointer ${
              currentSlide === 0 ? "bg-gray-200" : "bg-black"
            }`}
          >
            {/* <img className="h-[20px] w-[20px]" src={leftArrow} alt="Previous" /> */}
            <FaArrowLeftLong color={currentSlide === 0 ? "black" : "white"} />
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
            className={`px-6 py-4 rounded-[15px] duration-300 ease-in-out transform hover:scale-105 text-white cursor-pointer ${
              currentSlide === categories.length - 1
                ? "bg-gray-200"
                : "bg-black"
            }`}
          >
            {/* <img className="h-[20px] w-[20px]" src={rightArrow} alt="Next" /> */}
            <FaArrowRightLong
              color={currentSlide === categories.length - 3 ? "black" : "white"}
            />
          </button>
        </div>
      </div>
      <div className="  h-full w-full flex justify-center items-center">
        <div className="  w-[80%]">
          <Slider ref={sliderRef} {...settings}>
            {categories.map((obj, ind) => (
              <div
                key={ind}
                className="  h-[650px] w-[200px] relative flex justify-center items-center"
              >
                <div className="bg-black opacity-[50%] w-full h-full hover:opacity-0 transition-all duration-500   absolute"></div>
                <img src={obj.image} className="w-full h-full" />
                <button className=" cursor-pointer absolute bg-[#FFFFFF] w-[60%]  bottom-10 left-[50%] -translate-x-1/2 text-center px-4 py-3 rounded-[15px] text-[20px] text-gray-600 font-semibold">
                  {obj.name}
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      s
    </div>
  );
};

export default home;
