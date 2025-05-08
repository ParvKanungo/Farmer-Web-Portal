import React from "react";
import img4 from "../assets/image-4.png";
function About() {
  return (
    <div className="bg-orange-100 pt-20 pb-20 flex flex-row items-center gap-10 justify-center mt-3">
      <div className=" ">
        <img src={img4} className="h-96 w-96 border-4 border-blue-300" />
      </div>
      <div>
        <div className="flex flex-col  ">
          <p className="text-4xl font-bold">About Us</p>
          <p className="h-1 w-20 mt-7 bg-orange-600 "></p>
        </div>
        <div className="w-96  pt-4 font-medium ">
          The Farmer Web Portal is dedicated to supporting farmers by providing
          analytical tools and a collaborative platform. Our mission is to help
          farmer identify crop diseases, assess soil quality, and boost crop
          yeild through expert recommendations. With advanced image processing
          and disease identification, we enable farmers to make informed
          decision and connect with others for shared knowlegde and experience.
        </div>
      </div>
    </div>
  );
}

export default About;
