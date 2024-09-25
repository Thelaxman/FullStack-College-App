import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Login from "../pages/Login";
import Courses from "../pages/Courses";

import Programs from "../pages/Programs";
import Navbarr from "./Navbarr";
import Register from "../pages/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../../context/usercontext";

axios.defaults.baseURL = "http://localhost:8030";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Navbarr />
          <Toaster position="botton-right" toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/Courses" element={<Courses />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}
