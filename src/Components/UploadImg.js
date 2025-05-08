import React, { useState } from "react";
import Img4 from "../assets/image-4.jpg";
function UploadImg() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {};

  return (
    <div className="w-full relative h-screen mb-3">
      <img src={Img4} className="w-full h-full object-cover" />
      <div className="h-40 w-96 inset-0 inset-x-8 inset-y-64 flex flex-col gap-2 justify-center items-center   bg-slate-600 absolute bg-opacity-50">
        <input type="file" onClick={handleImageChange} />
        <p className="text-white text-4xl font-bold cursor-pointer">
        
          Upload Image
        </p>
      </div>
    </div>
  );
}

export default UploadImg;
