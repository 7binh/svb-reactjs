import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-primary uppercase">SVB</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Github</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <IoClose size={30} /> : <IoMenu size={30} />}
        {/* <IoMenu size={40} /> */}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500 "
        }
      >
        <h1 className="w-full text-3xl font-bold text-primary uppercase m-4">
          SVB
        </h1>
        <ul className="pt-6 uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Github</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
