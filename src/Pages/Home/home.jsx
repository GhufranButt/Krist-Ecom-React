import react, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../Elements/Navbar";
import BannerImg from "../../../assets/HomeBannerImg.png";
import SideBar from "../../Elements/SideBar.jsx";
import Footer from "../../Elements/Footer.jsx";
import ShopByCategories from "../../Elements/ShopByCategories.jsx";
import InstagramStories from "../../Elements/InstagramStories.jsx";
import { FaBars } from "react-icons/fa6";
import BestSellers from "../../Elements/BestSellers.jsx";
import CustomerReviews from "../../Elements/CustomerReviews.jsx";
import CountDown from "../../Elements/CountDown.jsx";

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
      <div className="py-4">
        <ShopByCategories />
      </div>
      <BestSellers />
      <CountDown />
      <CustomerReviews />
      <InstagramStories />
      <Footer />
    </div>
  );
};

export default home;
