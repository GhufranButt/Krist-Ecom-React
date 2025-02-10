import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "../../assets/iconsStar.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { reviews } from "../apiCalls/reviews/reviews.js";

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  // const sliderRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await reviews();
        console.log("response", response);

        const reviewsData = response.map((data) => data);
        console.log("reviewsData", reviewsData);

        setData(reviewsData);
      } catch (error) {
        console.error("Error reviews", error);
      }
    };
    fetchReviews();
  }, []);
  console.log("------->", data);

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
  console.log(data);

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex">
        <h1>What our Customer say's</h1>
        <div className="flex gap-3">
          {/* <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
            className={`px-5 py-3 rounded-[9px] xl:px-6 xl:py-4 shadow-lg xl:rounded-[15px] button text-white  ${
              currentSlide === 0 ? "bg-gray-200" : "bg-black"
            }`}
          >
            <FaArrowLeftLong color={currentSlide === 0 ? "black" : "white"} />
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
            className={`px-5 py-3 rounded-[9px] xl:px-6 xl:py-4 xl:rounded-[15px] button  text-white  ${
              currentSlide === categories.length - 3
                ? "bg-gray-200"
                : "bg-black"
            }`}
          >
            <FaArrowRightLong
              color={currentSlide === categories.length - 3 ? "black" : "white"}
            />
          </button> */}
        </div>
      </div>
      <div className="flex gap-10">
        {data.map((obj) => {
          const starsArray = [...Array(obj.rating)];
          return (
            <>
              <div className=" bg-[#ffff] shadow-lg" key={obj.id}>
                <div className="flex">
                  {starsArray.map((_, index) => (
                    <div className="flex" key={index}>
                      <img src={StarIcon} alt="Star" />
                    </div>
                  ))}
                </div>
                <p>{obj.reviewText}</p>
                <div className="flex">
                  <div className="rounded-full overflow-hidden h-[50px] w-[50px]">
                    <img
                      src={obj.profilePicture}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p>{obj.name}</p>
                    <p>{obj.jobTitle}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReviews;
