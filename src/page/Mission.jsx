import React from "react";
import pic10 from "./image/pic10.jpg";
import schoolkid from "./image/schoolkid.jpg"

const Mission = () => {
  return (
    <>
      <section className="flex flex-col-reverse px-4 items-center lg:flex-row lg:items-start bg-black mb-20 ">
        <div className="text-white text-center w-full px-6 lg:w-2/4 lg:px-0">
          <h1 className="text-xl lg:text-2xl font-semibold pt-10 lg:pt-20  ">
            Our Mission
          </h1>
          <p className="p-4 text-sm lg:text-l mt-2 mb-8">
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

      <section className="flex flex-col-reverse px-4 items-center lg:flex-row-reverse lg:items-start mb-20 ">
        <div className="text-black text-center w-full px-6 lg:w-2/4 lg:px-0">
          <h1 className="text-xl lg:text-2xl font-semibold pt-10 lg:pt-20  ">
            Our Vision
          </h1>
          <p className="p-4 text-sm lg:text-l mt-2 mb-8">
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
      
    </>
  );
};

export default Mission;
