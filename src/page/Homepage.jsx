import React from "react";
import { Hero } from "../component";
import { Link } from "react-router-dom";
import { AiOutlineBulb } from "react-icons/ai";
import { GiTireTracks } from "react-icons/gi";

const projectCard = [
  {
    id: 1,
    img: require("./image/pic3.jpg"),
    title: "Poverty Alleviation",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil",
  },
  {
    id: 2,
    img: require("./image/health1.jpg"),
    title: "Medical Assistance",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil",
  },
  {
    id: 3,
    img: require("./image/pic1.jpg"),
    title: "Education Assistance",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil",
  },
];

const Homepage = () => {
  return (
    <>
      <Hero />
      <div>
        <section className="py-20 px-10 text-center">
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
        </section>
        <section className="h-60 mb-20 flex items-center justify-center bg-[url('./image/missionbulb.jpg')] bg-[#252F46]/75  bg-no-repeat bg-blend-soft-light bg-cover bg-center">
          <Link to="/mission">
            <button className=" flex items-center m-auto rounded-full bg-[#FF0023] text-white font-semibold text-xl py-2 px-12 transition-all duration-300 ease-out hover:bg-[#Fdb827] hover:text-black">
              <span>
                <AiOutlineBulb size={20} />
              </span>
              <span className="pl-2">Mission & Vision</span>
            </button>
          </Link>
        </section>
        <section className="flex flex-col items-center mb-20">
          <h1 className="text-2xl lg:text-4xl font-bold text-center">
            Our Projects
          </h1>
          <div className="grid lg:grid-flow-col pt-14 gap-20 lg:gap-[9rem] px-10 ">
            {projectCard.map((items) => (
              <div
                key={items.id}
                className="w-60 bg-black text-white rounded-xl"
              >
                <img
                  src={items.img}
                  alt=""
                  className="w-full h-auto rounded-t-xl"
                />
                <div className="pb-14 pt-4 px-4">
                  <h2>{items.title}</h2>
                  <p>{items.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/ourtrack">
            <button className="mt-10 flex items-center m-auto rounded-full bg-[#FDB827] text-black font-semibold text-xl py-2 px-12 transition-all duration-300 ease-out hover:bg-[#FF0023] hover:text-white">
              <span>
                <GiTireTracks size={20} />
              </span>
              <span className="pl-2">Visit track</span>
            </button>
          </Link>
        </section>
        <section className="mb-20 flex items-center justify-center px-14">
          <div className="w-[25rem] text-center text-xl lg:text-2xl font-bold">
            <h2>
              Josphine’s Foundation is dedicated to assisting and helping the
              poor to alleviate poverty. Please join us in this quest of ours.
              Your donation will go long way to put a smile on their faces
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
