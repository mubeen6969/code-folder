import React from "react";
import Hero from "./hero";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-full  overflow-hidden">
      {/* NAVBAR */}
      <div className="flex items-center justify-between text-white px-6 md:px-12 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            className="h-7.5 w-7.5"
            src="/code-folder/websiteimages/logo.png"
            alt="logo"
          />
          <h3 className="text-2xl font-semibold">triplio</h3>
        </div>

        {/* MENU (hidden on mobile) */}
        <div className="hidden md:flex gap-8 text-lg">
          <h4 className="cursor-pointer hover:text-gray-300">Home</h4>
          <h4 className="cursor-pointer hover:text-gray-300">Destination</h4>
          <h4 className="cursor-pointer hover:text-gray-300">About</h4>
          <h4 className="cursor-pointer hover:text-gray-300">Testimonials</h4>
          <h4 className="cursor-pointer hover:text-gray-300">FAQ</h4>
          <h4 className="cursor-pointer hover:text-gray-300">Blog</h4>
        </div>

        {/* BUTTON */}
        <div className="flex items-center gap-2 cursor-pointer">
          <h3 className="text-lg  p-[10px_25px] rounded-full">Book Schedule</h3>
          <FaSquareArrowUpRight className=" text-4xl" />
        </div>
      </div>

      <div className="">
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;
