import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Login from "../pages/Login";

import Programs from "../pages/Programs";
import Navbarr from "./Navbarr";
import Register from "../pages/Register";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Programs" element={<Programs />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
