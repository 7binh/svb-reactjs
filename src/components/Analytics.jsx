import React from "react";
import Laptop from "../assets/laptop.png";
import Button from "./button/Button";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[300px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-sm text-primary">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-3xl sm:text-2xl font-bold text-xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi
            aut dolorem! Tenetur modi impedit officia qui placeat similique
            autem? Tempora beatae quisquam deleniti eveniet quam quos veniam,
            voluptates aspernatur.
          </p>
          {/* <button className="bg-darkColor text-primary w-48 rounded-md font-medium my-4 mx-auto md:mx-0 py-3">
            Get Started
          </button> */}
          <Button
            content="Get Started"
            className="w-48 rounded-md font-medium my-4 mx-auto md:mx-0 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
