import React from "react";
import Card from "./card/Card";

const CardList = () => {
  return (
    <div className=" bg-white py-[10rem] w-full px-5">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6 justify-between ">
        <Card className="" Price="$149" Title="For Single User " />
        <Card
          className="bg-gray-100 translate-y-[-20px]"
          Price="$199"
          Title="For Three User"
        />
        <Card className="" Price="$249" Title="For Group User" />
      </div>
    </div>
  );
};

export default CardList;
