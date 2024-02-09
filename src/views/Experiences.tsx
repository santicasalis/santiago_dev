import React from "react";
import { Experience } from "../components/experience/Experience";
import { Education } from "../components/education/Education";
import { CodingSkills } from "../components/codingSkills/CodingSkills";

export const Experiences = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <Experience />
      <Education />
      <CodingSkills />
    </div>
  );
};
