import React from "react";
import { Link } from "react-router-dom";
import logo from "./image/logo.PNG";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black p-10 flex  flex-col justify-center items-center lg:flex-row lg:justify-around lg:p-4">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-12 " />
            <div className="pl-1 flex flex-col text-center text-white">
              <span className="text-xl font-bold">Josephine's</span>
              <span className="text-l font-bold">Foundation</span>
            </div>
          </div>
        </Link>
        <ul className="flex flex-col items-center gap-10 w-full my-auto align-middle mr-auto lg:h-auto lg:flex-row lg:gap-4 lg:m-0 lg:w-auto">
          <li>
            <Link to="/">
              <span className="text-white text-l font-semibold py-2 px-4 hover:bg-[#FDB827]  hover:text-black transition duration-300 ease-in hover:ease-out">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link to="/mission">
              <span className="text-white text-l font-semibold py-2 px-4 hover:bg-[#FDB827] hover:text-black transition duration-300 ease-in hover:ease-out">
                Mission & Vision
              </span>
            </Link>
          </li>
          <li>
            <Link to="/mission">
              <span className="text-white text-l font-semibold py-2 px-4 hover:bg-[#FDB827] hover:text-black transition duration-300 ease-in hover:ease-out">
                Our track
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span className="text-white text-l font-semibold py-2 px-4  hover:bg-[#FDB827] hover:text-black transition duration-300 ease-in hover:ease-out">
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link to="/donate">
              <span className="text-white text-xl font-semibold border-4 py-2 px-8 lg:ml-2 border-[#FDB827] transition duration-300 ease-in hover:ease-out hover:bg-[#FDB827] hover:text-black ">
                Donate
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
