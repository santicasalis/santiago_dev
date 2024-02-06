import React from "react";
import { Nav } from "../components/nav/Nav";
import { SectionHello } from "../components/sectionHello/SectionHello";
import { CodingSkills } from "../components/codingSkills/CodingSkills";
import { Projects } from "./Projects";

const Home = () => {
  return (
    <div>
      <Nav />
      <SectionHello />
      <CodingSkills />
      <Projects />
    </div>
  );
};

export default Home;
