import React from "react";

import { SectionHello } from "../components/sectionHello/SectionHello";
import { CodingSkills } from "../components/codingSkills/CodingSkills";
import { Projectos } from "./Projectos";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionHello />
      <CodingSkills />
      <Projectos />

      <Contact />
    </div>
  );
};

export default Home;
