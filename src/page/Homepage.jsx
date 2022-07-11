import React from "react";
import { Hero } from "../component";
import {Link} from 'react-router-dom';
import {AiOutlineBulb} from 'react-icons/ai';

const Homepage = () => {
  return (
    <>
      <Hero />
      <div>
        <div className="py-20 px-10 text-center">
          <h1 className="text-2xl lg:text-4xl font-bold">What We Do</h1>
          <p className="px-6 lg:px-20 pt-3 text-l lg:text-xl ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur
          </p>
        </div>
        <div className="h-60 mb-20 flex items-center justify-center bg-[url('./image/missionbg.jpg')] bg-[#252F46]/75  bg-no-repeat bg-blend-soft-light bg-cover bg-center">
        <Link to="/mission">
          <button className=" flex items-center m-auto rounded-full bg-[#FF0023] text-white font-semibold text-xl py-2 px-12 transition-all duration-300 ease-out hover:bg-[#Fdb827] hover:text-black">
            <span><AiOutlineBulb size={20}/></span>
            <span className="pl-2">Mission & Vision</span> 
          </button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
