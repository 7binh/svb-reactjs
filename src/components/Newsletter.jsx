import React from "react";
import Button from "./button/Button";
import Input from "./input/Input";

const Newsletter = () => {
  return (
    <div className="text-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h2>
          <p className="text-sm py-2">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <Input
              placeholder="Enter Email"
              type="email"
              className="w-full md:mb-0 mb-4"
            />
            <Button content="Notify Me" styled="primary" className="md:mx-4" />
          </div>
          <p className="my-4">
            We care bout the protection of your data. Read our{" "}
            <span className="text-primary">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
