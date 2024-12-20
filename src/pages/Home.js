import React, { useState } from "react";
import Slider from "react-slick";

import ecommerce from "../assests/ecommerece.jpg";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    arrows: true,
  };

  return (
    <div className="hero-section ">
      <div className="relative z-0">
        <Slider {...settings} className="carousel-container">
          <div className="hero-slide">
            <img
              src={ecommerce}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="hero-overlay absolute top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center text-white">
              <div className="text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Welcome to Our Website
                </h1>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <img
              src={ecommerce}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="hero-overlay absolute top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center text-white">
              <div className="text-center px-4">
                <h1 className=" text-3xl md:text-5xl font-bold"> </h1>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <img
              src={ecommerce}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="hero-overlay absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
              <div className="text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold"></h1>
              </div>
            </div>
          </div>
        </Slider>
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white z-10"
          onClick={() => setCurrentSlide(currentSlide - 1)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white z-10"
          onClick={() => setCurrentSlide(currentSlide + 1)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
