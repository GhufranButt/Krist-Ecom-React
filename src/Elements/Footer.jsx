import React from "react";
import kristLogo from "../../assets/kristwhite.jpg";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import { CgFacebook } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import visaCardImg from "../../assets/visa.png";
import masterCardImg from "../../assets/masterCard.png";
import payPalCardImg from "../../assets/papPal.png";
import westernUnionCardImg from "../../assets/westernUnion.png";
import googleCardImg from "../../assets/google.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-gray-300 w-full">
      <div className="flex justify-between flex-col md:flex-row gap-4 py-14 px-10">
        <div className="flex flex-col sm:flex-row sm:justify-center items-center justify-around w-full gap-4 md:w-1/2">
          <div className="flex flex-col justify-center w-full sm:w-1/2 gap-2 items-start">
            <div className="flex justify-center items-center gap-2">
              <img
                src={kristLogo}
                className="h-[25px] xl:h-[40px] xl:w-[40px]"
              />
              <h1 className="text-gray-300 font-bold text-[25px] xl:text-[50px]">
                Krist
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <BiPhoneCall size={20} />
              <p className="text-gray-300 text-[15px] xl:text-[20px]">
                (704) 555-0127
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FiMail size={20} />
              <p className="text-gray-300 text-[15px] xl:text-[20px]">
                krist@gmail.com
              </p>
            </div>
            <div className="flex justify-center items-start gap-2">
              <SlLocationPin size={20} />
              <p className="text-gray-300 max-w-[300px] text-[15px] xl:text-[20px] text-start">
                3891 Ranchview Dr.Richardson, California 62639
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <h2 className="font-bold text-white text-[24px]">Information</h2>
            <p className="text-[15px] xl:text-[20px]">My Account</p>
            <p className="text-[15px] xl:text-[20px]">Login</p>
            <p className="text-[15px] xl:text-[20px]">My Cart</p>
            <p className="text-[15px] xl:text-[20px]">My Wishlist</p>
            <p className="text-[15px] xl:text-[20px]">Checkout</p>
          </div>
        </div>
        <div className="flex justify-around flex-col sm:flex-row w-full md:w-1/2 gap-2 ">
          <div className="flex flex-col w-full sm:w-1/2 gap-2">
            <h2 className="font-bold text-white text-[24px]">Service</h2>
            <p className="text-[15px] xl:text-[20px]">About us</p>
            <p className="text-[15px] xl:text-[20px]">Careers</p>
            <p className="text-[15px] xl:text-[20px]">Delivery Information</p>
            <p className="text-[15px] xl:text-[20px]">Privacy Policy</p>
            <p className="text-[15px] xl:text-[20px]">Terms & Conditions</p>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 gap-2">
            <h2 className="font-bold text-white text-[24px]">Subscribe</h2>
            <p className="text-gray-300 text-[15px] xl:text-[20px] max-w-[450px]">
              Enter your Email below to be the first to know about new
              collections and product launches
            </p>
            <button className="flex items-center gap-2 w-ful px-4 py-2 lg:w-[60%] justify-between  cursor-pointer border text-white rounded-lg shadow-md transform button">
              <div className="flex justify-center items-center gap-2">
                <FiMail size={20} />
                <span className="text-[15px] xl:text-[20px]">Your Email</span>
              </div>
              <FaArrowRightLong size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row py-5 border-t border-gray-600 justify-center sm:justify-between items-center w-full px-4 md:px-8 text-center">
        <div className="flex justify-center gap-4 items-center flex-wrap sm:flex-nowrap">
          <img src={visaCardImg} alt="Visa" className="w-[40px] h-auto" />
          <img
            src={masterCardImg}
            alt="MasterCard"
            className="w-[40px] h-auto"
          />
          <img src={payPalCardImg} alt="PayPal" className="w-[40px] h-auto" />
          <img
            src={westernUnionCardImg}
            alt="Western Union"
            className="w-[40px] h-auto"
          />
          <img
            src={googleCardImg}
            alt="Google Pay"
            className="w-[40px] h-auto"
          />
        </div>
        <div className="text-sm mt-4 sm:mt-0">
          @2025 Krist All Rights Reserved
        </div>
        <div className="flex justify-center gap-6 items-center mt-4 sm:mt-0">
          <LuInstagram className="w-[25px] h-[25px] cursor-pointer" />
          <CgFacebook className="w-[25px] h-[25px] cursor-pointer" />
          <LuTwitter className="w-[25px] h-[25px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
