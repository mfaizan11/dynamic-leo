import React, { useRef } from "react";
import Slider from "react-slick";

import ecommerce from "../assests/ecommerece.jpg";

function Home() {
  const sliderRef = useRef(null); // Reference for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable built-in arrows
  };

  return (
    <div className="hero-section h-screen relative">
      <div className="relative z-0 h-full">
        <Slider
          {...settings}
          ref={sliderRef}
          className="carousel-container h-full"
        >
          <div key="slide1" className="hero-slide h-[70vh] relative">
            <img
              src={ecommerce}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white z-10">
              <h1 className="text-3xl md:text-5xl font-bold">
                Welcome to Our Website
              </h1>
            </div>
          </div>

          <div key="slide2" className="hero-slide h-[70vh] relative">
            <img
              src={ecommerce}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white z-10">
              <h1 className="text-3xl md:text-5xl font-bold">
                Discover Our Products
              </h1>
            </div>
          </div>

          {/* Add more slides as needed */}
        </Slider>

        {/* Custom Arrow Buttons */}
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white z-10"
          onClick={() => sliderRef.current.slickPrev()} // Navigate to previous slide
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
          onClick={() => sliderRef.current.slickNext()} // Navigate to next slide
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
