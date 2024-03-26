import React from "react";
import { ReactTyped } from "react-typed";
import Button from "./button/Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w[800px] translate-y-[10%] w-full h-screen mx-auto text-center flex flex-col">
        <p className="uppercase text-primary font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center my-4">
          <p className="md:text-3xl sm:text-2xl text-xl font-light md:py-6 mr-2">
            Fast, flexible finacing for
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-xl font-bold md:py-6 text-primary"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        {/* <button className="bg-primary w-48 rounded-md font-medium mx-auto py-3">
          Get Started
        </button> */}
        <Button content="Get Started" styled="primary" className="" />
      </div>
    </div>
  );
};

export default Hero;
