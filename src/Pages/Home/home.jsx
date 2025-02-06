import react, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Elements/Navbar";
import BannerImg from "../../../assets/HomeBannerImg.png";
import SideBar from "../../Elements/SideBar.jsx";
import Footer from "../../Elements/Footer.jsx";
import ShopByCategories from "../../Elements/ShopByCategories.jsx";
import { FaBars } from "react-icons/fa6";

const home = () => {
  const [openBar, setopenBar] = useState(false);

  const openSideBar = () => {
    setopenBar((prev) => !prev);
  };

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center  gap-4 px-2 xl:px-7 ">
        <Navbar />
        <FaBars
          onClick={openSideBar}
          className="cursor-pointer relative block lg:hidden"
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
      <div className="px-2 xl:px-6">
        <img src={BannerImg} />
      </div>

      <ShopByCategories />

      {/* <div className=" flex gap-20  items-center justify-center xl:justify-around ">
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
      </div> */}
      <Footer />
    </div>
  );
};

export default home;
