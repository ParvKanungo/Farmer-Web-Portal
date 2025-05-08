import React, { useEffect, useState } from "react";
import GrainImg from "../assets/img1.jpg";
import Google from "../assets/g.png";

import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

function Login() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
     console.log(err);
    } 
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex  flex-col ">
        <img src={GrainImg} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#E0E0E0] flex flex-col p-28 gap-9">
        <div className="flex items-center justify-center text-2xl font-semibold">
          Login
        </div>

        <div className="w-full flex flex-col">
          <label> Email address</label>
          <input
            className="w-full text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mt-4">Password </label>
          <input
            className="w-full  text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <div className="w-full mt-2 flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember for 30 days</p>
            </div>
            <Link
              to={"/resetpassword"}
              className="text-sm font-medium text-blue-700 whitespace-nowrap cursor-pointer underline underline-offset-2"
            >
              Want to Change Password?
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col mt-4">
          <button
            onClick={handleLogin}
            className="w-full text-white hover:bg-green-600 bg-green-700 rounded-md p-3 text-center flex items-center justify-center"
          >
            Login
          </button>
        </div>
        {/* <div className="w-full flex items-center justify-center  relative py-2">
          <div className="w-full h-[1px] bg-black"> </div>
          <p className="text-lg absolute text-black/80">or</p>
        </div> */}

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Dont have a account?
            <Link
              to={"/register"}
              className="font-semibold underline underline-offset-2 cursor-pointer text-blue-700 ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
