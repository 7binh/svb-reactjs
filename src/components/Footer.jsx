import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-white py-10 px-4">
      <h1 className="text-3xl font-bold text-primary my-4">React</h1>
      <div className="lg:flex">
        <div className="lg:w-[50%] ">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            minus, sint facere quidem dolorum earum accusantium saepe esse
            itaque, quia distinctio recusandae qui illum maiores quis, in id!
            Minus, eligendi?
          </p>
          <div className="flex items-center gap-5 my-4">
            <FaFacebookSquare size={40} />
            <FaGithubSquare size={40} />
            <FaInstagramSquare size={40} />
            <FaDribbbleSquare size={40} />
          </div>
        </div>

        <div className="lg:flex gap-10 justify-evenly w-full">
          <div class="mb-4">
            <h5 class="mb-2 font-bold text-gray-100">Solutions</h5>
            <p class="">Option</p>
            <p class="">Approach</p>
            <p class="">Method</p>
            <p class="">Idea</p>
          </div>
          <div class="mb-4">
            <h5 class="mb-2 font-bold text-gray-100">Solutions</h5>
            <p class="">Strategy</p>
            <p class="">Alternative</p>
            <p class="">Approach</p>
            <p class="">Tactic</p>
          </div>
          <div class="mb-4">
            <h5 class="mb-2 font-bold text-gray-100">Solutions</h5>
            <p class="">Resolution</p>
            <p class="">Solution</p>
            <p class="">Option</p>
            <p class="">Approach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
