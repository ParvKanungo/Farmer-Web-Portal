import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import UploadImg from "./UploadImg";

import NoPage from "./NoPage";
function AppLayout() {
  return (
    <div>
      <Home />
      <UploadImg />
      <Service />
      <About />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default AppLayout;
