import React from "react";
import ecommerce from "../assests/ecommerece.jpg";

function About() {
  return (
    <div className="container mx-auto mt-12 py-10 px-4 flex md:flex items-center justify-center bg-gray-100 rounded-lg  shadow-lg">
      <div className="flex-1 text-left">
        <h1 className="font-bold text-4xl ">About us</h1>

        <p className="font-bold text-justify text-2xl hover:cursor-pointer hover:text-gray-700 hover:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          mollitia temporibus debitis. Facere fugiat veritatis enim ipsum
          deserunt sed incidunt nihil et sit earum, explicabo quia, labore
          voluptatibus minima obcaecati!
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={ecommerce}
          alt=""
          className="h-100 w-100 rounded-lg shadow-lg hover:opacity-80 hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

export default About;
