import React from "react";
import img from "../assets/image-5.png";

function Testimonial() {
  return (
    <div className="p-20">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-3xl font-semibold">TESTIMONIALS</p>
        <p className="h-1 w-14 mt-7 bg-orange-600 rounded-sm"></p>

        
          <div className="mt-6 flex item-center justify-center rounded-full mb-4">
            <img src={img}  className="h-36 rounded-3xl w-full"/>
          </div>
          <div className="flex items-center justify-center flex-col gap-3">
          <p className="font-semibold">I love how easy it is to get actionable insights about my soil and crops.The recommendation are  </p>
          <p className="font-semibold"> spot-on and have significantly improved my yield</p>
          </div>
      </div>
    </div>
  );
}

export default Testimonial;
