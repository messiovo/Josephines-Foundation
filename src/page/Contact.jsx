import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";



const Contact = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center lg:flex-row lg:justify-around py-10 px-20">
        <div className="basis-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold pb-10 lg:pb-0 text-center">
            Contact
          </h2>
        </div>
        <div className="basis-1/2">
          <span className="flex items-center text-lg lg:text-xl  pb-2 font-semibold">
            <AiOutlineHome size={20} />
            <h3 className="pl-2">Address</h3>
          </span>
          <p className="pl-[1.8rem] text-sm lg:text-lg">
            Road Market, Benin-City, Edo State
          </p>
          <span className="flex items-center text-lg lg:text-xl  pt-4 pb-2 font-semibold">
            <BsTelephone size={20} />
            <h3 className="pl-2">Phone number</h3>
          </span>
          <p className=" pl-[1.8rem] text-lg lg:text-xl">08000000000</p>
          <span className="flex items-center text-lg lg:text-xl  font-semibold  pt-4 pb-2 font-semibold">
            <AiOutlineMail size={20} />
            <h3 className="pl-2">Email</h3>
          </span>
          <p className=" pl-[1.8rem] text-sm lg:text-lg">
            josephinefoundation@foundation.com
          </p>
        </div>
      </section>
      <section className="h-80 py-10 px-20 flex flex-col justify-center items-center lg:flex-row lg:justify-around  text-white  bg-[url('./image/connectpic.jpg')] bg-[#000]/70  bg-no-repeat bg-blend-soft-light bg-cover bg-center">
        <div className="w-full lg:w-2/4 basis-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold pb-10 lg:pb-0 text-center ">
            Connect with us
          </h2>
        </div>
        <div className=" w-2/4 flex flex-col lg:flex-row items-center lg:items-start basis-1/2">
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
      </section>
    </>
  );
};

export default Contact;
