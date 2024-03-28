import React from "react";
import VipIcon from "../../assets/vip.png";
import Button from "../button/Button";
const Card = (props) => {
  return (
    <div
      className={`lg:my-0 my-10 w-full flex flex-col items-center border-2 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:scale-105 ease-in-out duration-100 ${props.className}`}
    >
      <div className="w-20 translate-y-[-60%]">
        <img className="w-full h-full object-cover" src={VipIcon} alt="" />
      </div>
      <h2 className="font-bold text-2xl mb-8">{props.Title}</h2>
      <h2 className="font-bold text-5xl mb-8">{props.Price}</h2>
      <div className="flex flex-col items-center my-8">
        <p className="my-3 text-lg ">500Gb</p>
        <p className="my-3 text-lg ">1 User Allowed</p>
        <p className="my-3 text-lg ">Send Up To 2Gb</p>
      </div>
      <Button content="Start trial" styled="primary" className="mb-20" />
    </div>
  );
};

export default Card;
