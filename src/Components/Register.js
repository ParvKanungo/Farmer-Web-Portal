import Img from "../assets/image-6.png";
import Google from "../assets/g.png";
import { Link } from "react-router";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = { name, email, password,Confirmpassword };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong.");
    }
  };
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex  flex-col ">
        <img src={Img} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#E0E0E0] flex flex-col p-28 gap-9">
        <div className="flex items-center justify-center">
          <p className="text-2xl font-semibold">SignUp</p>
        </div>

        <div className="w-full flex flex-col">
          <label className="mt-5"> Email address</label>
          <input
            className="w-full text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label>Name </label>
          <input
            className="w-full text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="text"
            name="name"
            required
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mt-4">Password </label>
          <input
            className="w-full  text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="mt-4">Confirm Password </label>
          <input
            className="w-full  text-black border-none p-3 rounded-md border-black outline-none focus:outline-none"
            type="password"
            name="confirmpassword"
            required
            value={Confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter confirm password"
          />
        </div>

        <div className="w-full flex flex-col mt-4">
          <button
            onClick={handleRegister}
            className="w-full text-white hover:bg-green-600 bg-green-700 rounded-md p-3 text-center flex items-center justify-center"
          >
            Sign Up
          </button>
        </div>
        {/* <div className="w-full flex items-center justify-center  relative py-2">
          <div className="w-full h-[1px] bg-black"> </div>
          <p className="text-lg absolute text-black/80">or</p>
        </div> */}
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Want to SignIn?
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

export default Register;
