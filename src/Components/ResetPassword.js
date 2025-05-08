import React, { useState } from "react";
import { Link, Navigate } from "react-router";
import Image from "../assets/image-11.png";

function ResetPassword() {
  const [oldpassword, setoldPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const userData = { oldpassword, newpassword };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/user/changepassword/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Password Change successful!");
        Navigate("/home");
      } 
    } catch (error) {
      console.error(" error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex  flex-col ">
        <img src={Image} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#E0E0E0]  flex flex-col p-28 gap-9">
        <div className="flex items-center justify-center text-2xl font-semibold">
          Change Password
        </div>

        <div className="w-full flex flex-col gap-3 ">
          <label> Enter Old Password</label>
          <input
            className="w-full text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="password"
            value={oldpassword}
            onChange={(e) => setoldPassword(e.target.value)}
            placeholder="Enter your old password"
          />
          <label> Enter New Password</label>
          <input
            className="w-full text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="password"
            value={newpassword}
            onChange={(e) => setnewPassword(e.target.value)}
            placeholder="Enter your new password"
          />
        </div>

        <div className="w-full flex flex-col mt-4">
          <button
            onClick={handleChangePassword}
            className="w-full text-white hover:bg-green-600 bg-green-700 rounded-md p-3 text-center flex items-center justify-center"
          >
            Change Password
          </button>
        </div>
        {/* <div className="w-full flex items-center justify-center  relative py-2">
              <div className="w-full h-[1px] bg-black"> </div>
              <p className="text-lg absolute text-black/80">or</p>
            </div> */}

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Want to Sign in?
            <Link
              to={"/login"}
              className="font-semibold underline underline-offset-2 cursor-pointer text-blue-700 ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
