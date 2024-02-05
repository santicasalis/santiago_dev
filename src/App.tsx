import React from "react";
import "./App.css";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./views/AboutMe";
import { Contact } from "./views/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
