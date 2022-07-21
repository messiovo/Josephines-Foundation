import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { AiOutlineBulb } from "react-icons/ai";

const Form = () => {
  const [money, setMoney] = useState("");

  return (
    <div>
      <form className="bg-black mb-24 w-[22rem] m-auto p-10">
        <div className="mb-6 flex flex-row justify-around gap-6">
          <button className="bg-[#D9D9D9] px-8 py-1 rounded-full text-lg lg:text-xl font-semibold">Once</button>
          <button className="bg-[#FF0023] px-8 py-1 rounded-full text-white text-lg lg:text-xl font-semibold">Monthly</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <button className="bg-[#D9D9D9] px-2 py-1">N5000</button>
          <button className="bg-[#D9D9D9] px-2 py-1">N20000</button>
          <button className="bg-[#D9D9D9] px-2 py-1">N40000</button>
          <button className="bg-[#D9D9D9] px-2 py-1">N60000</button>
          <button className="bg-[#D9D9D9] px-2 py-1">N80000</button>
          <button className="bg-[#D9D9D9] px-2 py-1">N100000</button>
        </div>
        <div>
          <input type="text" value={money} className="w-[17rem] py-2" />
        </div>
        <div className=" bg-[#D9D9D9] mt-4 pt-4 pb-8">
          <h3 className="text-center pb-4">Choose a track</h3>
          <div className="flex flex-col pl-16 gap-4">
            <label htmlFor="Poverty-alleviation">
              <input type="radio" name="trackPath" />
              Poverty alleviation
            </label>
            <label htmlFor="medical-assistance">
              <input type="radio" name="trackPath" />
              Medical assistance
            </label>
            <label htmlFor="education-assistance">
              <input type="radio" name="trackPath" />
              Education assistance
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-6 ">
          <button className=" flex items-center m-auto rounded-full bg-[#FDB827] text-black font-semibold text-xl py-2 px-20 transition-all duration-300 ease-out hover:bg-[#FF0023] hover:text-white">
            <span>
              <BiDonateHeart size={20} />
            </span>
            <span className="pl-2">Donate</span>
          </button>
          <p className="text-white text-center">or</p>
          <button className="flex items-center m-auto rounded-full bg-[#FF0023] text-white font-semibold text-xl py-2 px-10 transition-all duration-300 ease-out hover:bg-[#Fdb827] hover:text-black">
            <span >
              <AiOutlineBulb size={20} />
            </span>
            <span className="pl-2">Donate monthly</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
