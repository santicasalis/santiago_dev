import React from "react";
import "./App.css";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";

import { AboutMe } from "./views/aboutMe/AboutMe";
import { Nav } from "./components/nav/Nav";
import Contact from "./views/contact/Contact";

import { Experiences } from "./views/Experiences";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/experience" element={<Experiences />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
