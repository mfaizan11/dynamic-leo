import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

import ecommerce from "../assests/ecommerece.jpg";
import About from "./About";
import Products from "../components/Products";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  const sliderRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="hero-section relative">
        <div className="relative z-0 ">
          <Slider {...settings} ref={sliderRef} className="carousel-container ">
            <div key="slide1" className="hero-slide aspect-video relative ">
              <img
                src={ecommerce}
                alt="Slide 1"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center text-white z-10">
                <h1
                  className="text-3xl md:text-5xl font-bold"
                  data-aos="fade-up"
                >
                  Welcome to Our Website
                </h1>
              </div>
            </div>

            <div
              key="slide2"
              className="hero-slide aspect-video relative"
              data-aos="fade-up"
            >
              <img
                src={ecommerce}
                alt="Slide 2"
                className="w-full aspect-video object-cover"
                data-aos="fade-up"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white z-10">
                <h1
                  className="text-3xl md:text-5xl font-bold"
                  data-aos="fade-up"
                >
                  Discover Our Products
                </h1>
              </div>
            </div>

            <div key="slide3" className="hero-slide aspect-video relative">
              <img
                src={ecommerce}
                alt="Slide 3"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white z-10">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Discover Our Products
                </h1>
              </div>
            </div>
          </Slider>

          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white z-10"
            onClick={() => sliderRef.current.slickPrev()}
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
            onClick={() => sliderRef.current.slickNext()}
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

      <div className="container mx-auto">
        <div>
          <About />
        </div>
      </div>

      <div className="container mx-auto my-40  ">
        <div className="mt-10">
          <Products />
        </div>
      </div>
    </>
  );
}

export default Home;
