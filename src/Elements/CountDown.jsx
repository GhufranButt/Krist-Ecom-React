import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import countDownImg from "../../assets/countDown.jpg";
import countDown2Img from "../../assets/countDown2Img.jpg";
import { useNavigate } from "react-router-dom";

const CountDown = () => {
  const navigate = useNavigate();

  const duration = 125 * 24 * 60 * 60 * 1000;
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const handleNavigate = () => {
    navigate("/product-categories");
  };

  const timer = (millisec) => {
    const total_seconds = parseInt(Math.floor(millisec / 1000));
    const total_minutes = parseInt(Math.floor(total_seconds / 60));
    const total_hours = parseInt(Math.floor(total_minutes / 60));
    const days = Math.floor(total_hours / 24);

    let seconds = Math.floor(total_seconds % 60);
    let minutes = Math.floor(total_minutes % 60);
    let hours = Math.floor(total_hours % 24);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = timer(time);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-evenly w-full items-center mx-auto py-3 xl:py-20">
      <div className="flex flex-col gap-4 w-full md:w-auto px-4 md:px-0">
        <p className="text-[24px] sm:text-[30px] xl:text-[45px] barlow-medium text-center lg:text-left">
          Deals of the Month
        </p>
        <div className="flex flex-col gap-7 w-full md:w-[360px] lg:w-[400px] xl:w-[660px]">
          <p className="text-[13px] sm:text-[16px] poppins-medium text-wrap text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            eaque corporis laudantium sed quas aliquid officia dolore nemo
            consectetur, asperiores sint voluptatem dolor velit aliquam
            reiciendis tempora magnam hic minus.
          </p>

          <div className="flex flex-col-2 gap-4 md:flex-row justify-center lg:justify-start">
            <div className="flex flex-col border justify-center items-center button border-gray-200 shadow-sm bg-white px-5 w-[80px] sm:w-[100px] text-[28px] sm:text-[35px] barlow-extrabold">
              {days}
              <span className="text-[16px] sm:text-[20px] barlow-medium">
                Days
              </span>
            </div>
            <div className="flex flex-col border justify-center items-center button border-gray-200 shadow-sm bg-white px-5 w-[80px] sm:w-[100px] text-[28px] sm:text-[35px] barlow-extrabold">
              {hours}
              <span className="text-[16px] sm:text-[20px] barlow-medium">
                Hours
              </span>
            </div>
            <div className="flex flex-col border justify-center items-center button border-gray-200 shadow-sm bg-white px-5 w-[80px] sm:w-[100px] text-[28px] sm:text-[35px] barlow-extrabold">
              {minutes}
              <span className="text-[16px] sm:text-[20px] barlow-medium">
                Mins
              </span>
            </div>
            <div className="flex flex-col border justify-center items-center button border-gray-200 shadow-sm bg-white px-5 w-[80px] sm:w-[100px] text-[28px] sm:text-[35px] barlow-extrabold">
              {seconds}
              <span className="text-[16px] sm:text-[20px] barlow-medium">
                Secs
              </span>
            </div>
          </div>

          <button
            onClick={handleNavigate}
            className="flex items-center justify-center text-[15px] rounded-[14px] barlow-medium button w-[170px] py-3 text-white bg-black gap-2 mx-auto lg:mx-0 "
          >
            <p>View All Products</p>
            <FaArrowRightLong color="white" />
          </button>
        </div>
      </div>
      <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] relative overflow-hidden mt-4 md:mt-0">
        <img
          src={countDown2Img}
          alt="Photo"
          className="w-full h-full object-cover rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out opacity-85 hover:opacity-100 hover:scale-105"
        />
        <div className="absolute inset-0 bg-opacity-20 rounded-lg pointer-events-none transition-opacity duration-500 ease-in-out hover:bg-opacity-0"></div>
      </div>
    </div>
  );
};

export default CountDown;
