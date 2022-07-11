import React from "react";
import {Link} from 'react-router-dom';
import hero from './image/image.jpg';
import {BiDonateHeart} from 'react-icons/bi'


const Hero = () => {
  return (
    <div className="flex flex-col-reverse px-4 items-center lg:flex-row lg:items-start bg-black pb-20 ">
      <div className="text-white text-center w-full px-6 lg:w-2/4 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-semibold pt-10 lg:pt-20  ">Let’s Join Hands to Alleviate Poverty</h1>
        <p className="p-4 text-sm lg:text-l mt-2 mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventor
        </p>
        <Link to="/donate">
          <button className=" flex items-center m-auto rounded-full bg-[#FDB827] text-black font-semibold text-xl py-2 px-12 transition-all duration-300 ease-out hover:bg-[#FF0023] hover:text-white">
            <span><BiDonateHeart size={20}/></span>
            <span className="pl-2">Make a donation</span> 
          </button>
        </Link>
      </div>
      <div className="2/4 p-8">
        <img src={hero} alt="picture" className="w-auto" />
      </div>
    </div>
  );
};

export default Hero;
