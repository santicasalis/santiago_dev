import React from "react";
import { Experience } from "../components/experience/Experience";
import { Education } from "../components/education/Education";
import { CodingSkills } from "../components/codingSkills/CodingSkills";

export const Experiences = () => {
  return (
    <div>
      {" "}
      <Experience />
      <Education />
      <CodingSkills />
    </div>
  );
};
