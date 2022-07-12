import React from "react";
import pic10 from "./image/pic10.jpg";
import schoolkid from "./image/schoolkid.jpg";
import partnerbg from "./image/partnerbg.jpg";
import { TbHeartHandshake } from "react-icons/tb";
import { Link } from "react-router-dom";
import {BiDonateHeart} from 'react-icons/bi';

const Mission = () => {
  return (
    <>
      <section className="flex flex-col-reverse px-4 items-center lg:flex-row lg:items-start bg-black mb-20 ">
        <div className="text-white  w-full px-6 lg:w-2/4 lg:px-0">
          <h1 className="text-xl text-center lg:text-2xl font-semibold pt-10 lg:pt-20  ">
            Our Mission
          </h1>
          <p className="py-4 px-10 text-sm text-center lg:text-l mt-2 mb-8 lg:text-start">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventor
          </p>
        </div>
        <div className="w-2/4 pt-6">
          <img src={pic10} alt="picture" className="w-full" />
        </div>
      </section>

      <section className="flex flex-col-reverse px-4 items-center mb-10 lg:mb-20 lg:flex-row-reverse lg:items-start ">
        <div className="text-black  w-full px-6 lg:w-2/4 lg:px-0">
          <h1 className="text-xl text-center lg:text-2xl font-semibold pt-10 lg:pt-20  ">
            Our Vision
          </h1>
          <p className="py-4 px-10 text-sm text-center lg:text-l mt-2 mb-8 lg:text-start">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventor
          </p>
        </div>
        <div className="w-2/4 pt-6">
          <img src={schoolkid} alt="picture" className="w-full m-auto" />
        </div>
      </section>
      <section className="h-80 mb-20 flex flex-col items-center mt-0 lg:mt-10  bg-[url('./image/partnerbg.jpg')] bg-[#000]/70  bg-no-repeat bg-blend-soft-light bg-cover bg-center">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white pt-16 text-center px-6">
            Partner With Us
          </h1>
          <p className="px-6 lg:px-20 pt-3 text-sm lg:text-lg text-white text-center pb-10 ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
        <Link to="/mission">
          <button className=" flex items-center m-auto rounded-full bg-[#FF0023] text-white font-semibold text-xl py-2 px-12 transition-all duration-300 ease-out hover:bg-[#Fdb827] hover:text-black">
            <span>
              <TbHeartHandshake size={20} />
            </span>
            <span className="pl-2">Become a partner</span>
          </button>
        </Link>
      </section>
      <section className="mb-20">
      <div className="text-center text-xl lg:text-2xl font-bold px-20 pb-10 mb-10">
            <h2>
              Josphine’s Foundation is dedicated to assisting and helping the
              poor to alleviate poverty. Please join us in this quest of ours.
              Your donation will go long way to put a smile on their faces
            </h2>
          </div>
        <Link to="/donate">
          <button className=" flex items-center m-auto rounded-full bg-[#FDB827] text-black font-semibold text-xl py-2 px-12 transition-all duration-300 ease-out hover:bg-[#FF0023] hover:text-white">
            <span><BiDonateHeart size={20}/></span>
            <span className="pl-2">Make a donation</span> 
          </button>
        </Link>
      </section>
    </>
  );
};

export default Mission;
