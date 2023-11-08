import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

function Navbarr() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] max-w-xs transition duration-300 ease-in-out hover:scale-110 ">
        <Link to="/">Bow Valley College</Link>
      </h1>
      <nav>
        <ul className="hidden md:flex">
          <li className="p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:bg-slate-400 ">
            {" "}
            <Link to="/Programs">Programs & Courses</Link>
          </li>
          <li className="p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:bg-slate-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:bg-slate-400">
            {" "}
            <Link to="/Login">Login Portal</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Bow Valley College
        </h1>
        <ul className=" uppercase p-4 ">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            {" "}
            <Link to="/Programs">Programs & Courses</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            {" "}
            <Link to="/Login">Login Portal</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbarr;
