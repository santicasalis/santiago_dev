import React from "react";

import { SectionHello } from "../components/sectionHello/SectionHello";
import { CodingSkills } from "../components/codingSkills/CodingSkills";
import { Projectos } from "./Projectos";
import Contact from "./contact/Contact";
import { Experience } from "../components/experience/Experience";
import { Footer } from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <SectionHello />
      <CodingSkills />
      <Projectos />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
