import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "../../assets/iconsStar.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { reviews } from "../apiCalls/reviews/reviews.js";

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await reviews();
        const reviewsData = response.map((data) => data);
        setData(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };
    fetchReviews();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= data.length - 3;

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
          What Our Customers Say
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            disabled={isPrevDisabled}
            className={`px-4 py-2 rounded-lg button shadow-lg transition-colors ${
              isPrevDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            <FaArrowLeftLong
              className={`text-lg ${
                isPrevDisabled ? "text-gray-500" : "text-white"
              }`}
            />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            disabled={isNextDisabled}
            className={`px-4 py-2 rounded-lg  button shadow-lg transition-colors ${
              isNextDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            <FaArrowRightLong
              className={`text-lg ${
                isNextDisabled ? "text-gray-500" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <Slider ref={sliderRef} {...settings}>
          {data.map((obj) => {
            const starsArray = [...Array(obj.rating).keys()];
            return (
              <div key={obj.id} className="px-2">
                <div className="bg-white p-6 rounded-lg button shadow-md h-full flex flex-col">
                  <div className="flex mb-4">
                    {starsArray.map((_, index) => (
                      <img
                        key={index}
                        src={StarIcon}
                        alt="Star"
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {obj.reviewText}
                  </p>
                  <div className="flex items-center">
                    <div className="rounded-full overflow-hidden h-12 w-12 mr-4">
                      <img
                        src={obj.profilePicture}
                        alt={obj.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{obj.name}</p>
                      <p className="text-sm text-gray-500">{obj.jobTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
