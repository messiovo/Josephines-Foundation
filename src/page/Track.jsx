import React from "react";
import pic3 from "./image/pic3.jpg";
import pic4 from "./image/pic4.jpg";
import pic5 from "./image/pic5.jpg";
import health1 from "./image/health1.jpg";
import health2 from "./image/health2.jpg";
import health4 from "./image/health4.jpg";
import edu1 from "./image/edu1.jpg";
import edu2 from "./image/edu2.jpg";
import edu3 from "./image/edu3.jpg";

const Track = () => {
  return (
    <>
      <section className="mb-20">
        <div className="px-14 py-10">
          <h2 className="text-lg lg:text-2xl font-bold">Poverty Alleviation</h2>
          <p className="text-sm pt-4 lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center lg:flex-row py-6">
          <img src={pic3} alt="" className="w-[35%] lg:w-[25%]" />
          <img src={pic4} alt="" className="w-[35%] lg:w-[25%]  " />
          <img src={pic5} alt="" className="w-[35%] lg:w-[25%] " />
        </div>
        <div className="px-16">
          <p className="text-sm pt-4 lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
          </p>
        </div>
      </section>
      <section className="mb-20 text-white bg-black">
        <div className="px-14 py-10">
          <h2 className="text-lg lg:text-2xl font-bold">Medical Assistance</h2>
          <p className="text-sm pt-4 lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center lg:flex-row py-6">
          <img src={health1} alt="" className="w-[35%] lg:w-[25%]" />
          <img src={health2} alt="" className="w-[35%] lg:w-[25%]  " />
          <img src={health4} alt="" className="w-[35%] lg:w-[25%] " />
        </div>
        <div className="px-16">
          <p className="text-sm pt-4 lg:text-lg pb-14">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
          </p>
        </div>
      </section>
      <section className="mb-20">
        <div className="px-14 py-10">
          <h2 className="text-lg lg:text-2xl font-bold">Education Assistance</h2>
          <p className="text-sm pt-4 lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center lg:flex-row py-6">
          <img src={edu1} alt="" className="w-[35%] lg:w-[25%]" />
          <img src={edu2} alt="" className="w-[35%] lg:w-[25%]  " />
          <img src={edu3} alt="" className="w-[35%] lg:w-[25%] " />
        </div>
        <div className="px-16">
          <p className="text-sm pt-4 lg:text-lg pb-14">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventor accusantium doloremque
          </p>
        </div>
      </section>
    </>
  );
};

export default Track;
