import React from "react";
import HomeImg from "../assets/Home-img.jpg";
function Home() {
  return (
    <div className=" mb-3">
      <div className="w-full relative h-screen">
        <img src={HomeImg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center flex-col text-white font-bold text-lg">
          <p className="text-6xl">Empowering Farmers, Enriching Crops</p>
          <p className="h-1 w-24 mt-12 bg-orange-600 rounded-sm"></p>
          <div>
          <p className="font-medium mt-12">
            Your gateway to smarter farming solutions.
          </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
