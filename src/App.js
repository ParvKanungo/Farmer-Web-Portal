import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import "./App.css";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
import Login from "./Components/Login";
import NoPage from "./Components/NoPage";
import AppLayout from "./Components/AppLayout";
import ResetPassword from "./Components/ResetPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Components/Register";
import UploadImg from "./Components/UploadImg";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/home" element={<AppLayout />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
