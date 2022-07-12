import React from "react";
import { Link } from "react-router-dom";
import {Form} from "../component";

const Donate = () => {
  return (
    <>
      <div className="text-center  px-20 py-10 mb-10">
        <h2 className="text-xl lg:text-2xl font-bold">
        Josephine’s Foundation is working everyday to make life easier in the lives of Nigerians
        </h2>
        <p className="py-4 text-sm lg:text-lg">Your donation will make the work easier and will go a long way to impact lives.</p>
        <p className=" text-sm lg:text-lg">***We use industry standard SSL technology to keep your information secure</p>
      </div>
      <div>
        <Form/>
      </div>
    </>
  );
};

export default Donate;
