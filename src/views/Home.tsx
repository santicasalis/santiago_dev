import React from "react";

import { SectionHello } from "../components/sectionHello/SectionHello";
import { CodingSkills } from "../components/codingSkills/CodingSkills";
import { Projectos } from "./Projectos";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <div>
      <SectionHello />
      <CodingSkills />
      <Projectos />
      <Contact />
    </div>
  );
};

export default Home;
