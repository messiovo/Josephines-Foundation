import React from "react";
import { Link } from "react-router-dom";
import logo from "./image/logo.PNG";
import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center pt-10 ">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-12 " />
          <div className="pl-1 flex flex-col text-center text-white">
            <span className="text-xl font-bold">Josephine's</span>
            <span className="text-l font-bold">Foundation</span>
          </div>
        </div>
      </Link>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around w-full mt-10">
        <div className="px-10 flex flex-col items-center lg:items-start">
          <span className="flex items-center text-lg lg:text-xl text-white pb-2 font-semibold">
            <AiOutlineHome size={20} />
            <h3 className="pl-2">Address</h3>
          </span>
          <p className="text-white pl-[1.8rem] text-sm lg:text-lg">
            Road Market, Benin-City, Edo State
          </p>
          <span className="flex items-center text-lg lg:text-xl text-white pt-4 pb-2 font-semibold">
            <BsTelephone size={20} />
            <h3 className="pl-2">Phone number</h3>
          </span>
          <p className="text-white pl-[1.8rem] text-lg lg:text-xl">
            08000000000
          </p>
          <span className="flex items-center text-lg lg:text-xl text-white font-semibold  pt-4 pb-2 font-semibold">
            <AiOutlineMail size={20} />
            <h3 className="pl-2">Email</h3>
          </span>
          <p className="text-white pl-[1.8rem] text-sm lg:text-lg">
            josephinefoundation@foundation.com
          </p>
        </div>

        <div className="px-10 flex flex-col items-center gap-8">
          <h2 className="text-white text-lg lg:text-xl font-semibold mt-8 lg:mt-0">
            Connect with us:
          </h2>
          <div className="">
            <span className="text-[#166fe5] text-2xl lg:text-3xl block">
              <BsFacebook />
            </span>
            <span className="text-[#1a8cd8] text-2xl lg:text-3xl block pt-10">
              <BsTwitter />
            </span>
            <span className="text-[#e1306c] text-2xl lg:text-3xl block pt-10">
              <BsInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className="text-white flex  w-full flex-col align-middle text-center items-end pr-10 pt-[7rem]">
        <div className="flex items-center  px-7 font-semibold text-sm">
          <AiFillCopyrightCircle />
          <p>Messiovo</p>
        </div>
        <div className="text-sm">
          <p>for</p>
          <p>Josephine's Foundation</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
