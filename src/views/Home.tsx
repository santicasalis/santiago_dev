import React from "react";
import { Nav } from "../components/nav/Nav";
import { SectionHello } from "../components/sectionHello/SectionHello";
import { CodingSkills } from "../components/codingSkills/CodingSkills";
import { Projectos } from "./Projectos";

const Home = () => {
  return (
    <div>
      <SectionHello />
      <CodingSkills />
      <Projectos />
    </div>
  );
};

export default Home;
