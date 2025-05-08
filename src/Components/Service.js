import React from "react";
import img1 from "../assets/image-1.jpg";
import img2 from "../assets/image-2.avif";
import img3 from "../assets/image-3.jpg";
function Service() {
  return (
    <div className="p-10 pt-20  flex items-center flex-col justify-center bg-orange-100">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-3xl font-semibold">SERVICES</p>
        <p className="h-1 w-14 mt-7 bg-orange-600 rounded-sm"></p>
      </div>
      <div className="flex gap-20">
        <div className="mt-10 ">
          <div>
            <img src={img1} className="h-48 rounded-lg" />
          </div>
          <div className="w-72">
            <p className="font-bold mt-3 mb-3">Personalized Dashboard</p>
            <p className="text-sm  font-medium">
              Access your personalized dashboard to view analysis
              history,recommended actions connections, and messages in one place
            </p>
          </div>
        </div>
        <div className="mt-10  pb-10">
          <div>
            <img src={img2} className="h-48 rounded-lg w-72" />
          </div>
          <div className="w-72">
            <p className="font-bold mt-3 mb-3">Personalized Dashboard</p>
            <p className="text-sm  font-medium">
              Access your personalized dashboard to view analysis
              history,recommended actions connections, and messages in one place
            </p>
          </div>
        </div>
        <div className="mt-10 ">
          <div>
            <img src={img3} className="h-48 rounded-lg" />
          </div>
          <div className="w-72">
            <p className="font-bold mt-3 mb-3">Personalized Dashboard</p>
            <p className="text-sm  font-medium">
              Access your personalized dashboard to view analysis
              history,recommended actions connections, and messages in one place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
