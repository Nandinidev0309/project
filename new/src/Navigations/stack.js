import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Skills from "../screens/skills/skills";
import Projects from "../screens/project/project";
import Doctor from "../screens/doctor/doctor";
import Engineer from "../screens/engineer/engineer";
import Products from "../screens/products/products";
import Invalid from "../screens/invalid-data/invalid-data";
import Home from "../screens/home/home";

const Stack = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="doctors" element={<Doctor />} />
            <Route path="engineers" element={<Engineer />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/:location/:restaurent/info" element={<Products />} />
          <Route path="*" element={<Invalid />} />{" "}
          {/*    "* "represnts for invalid path */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Stack;
