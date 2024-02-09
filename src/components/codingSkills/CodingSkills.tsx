import React from "react";
import reactPhoto from "../../assets/react.png";
import javaScriptPhoto from "../../assets/js.png";
import htmlPhoto from "../../assets/html.png";
import cssPhoto from "../../assets/css.png";
import nextPhoto from "../../assets/next.png";
import reduxPhoto from "../../assets/redux.png";
import rubyPhoto from "../../assets/ruby.png";
import nodePhoto from "../../assets/nodejs.png";
import expressPhoto from "../../assets/expre.png";
import postgrePhoto from "../../assets/postgre.png";

import styles from "../codingSkills/codingSkills.module.css";
export const CodingSkills = () => {
  const codingSkills = [
    { id: 3, name: "HTML", imageSrc: htmlPhoto },
    { id: 4, name: "CSS", imageSrc: cssPhoto },
    { id: 2, name: "JavaScript", imageSrc: javaScriptPhoto },
    { id: 1, name: "React", imageSrc: reactPhoto },
    { id: 5, name: "Next Js", imageSrc: nextPhoto },
    { id: 6, name: "Redux", imageSrc: reduxPhoto },
    { id: 7, name: "Ruby", imageSrc: rubyPhoto },
    { id: 8, name: "Node Js", imageSrc: nodePhoto },
    { id: 9, name: "Express", imageSrc: expressPhoto },
    { id: 10, name: "PostgreSQL", imageSrc: postgrePhoto },
  ];
  const firstRowSkills = codingSkills.slice(0, 5);
  const secondRowSkills = codingSkills.slice(5);

  return (
    <div className={styles.codingSkillsContainer}>
      <div className={styles.skillTitle}>Coding Skills</div>
      <div className={styles.iconsSkillContainer}>
        <div className={styles.skillRow}>
          {firstRowSkills.map((skill) => (
            <div key={skill.id} className="coding-skill-card">
              <img
                src={skill.imageSrc}
                alt={skill.name}
                style={{
                  width: "50px",
                  marginRight: "15px",
                  marginLeft: "15px",
                }}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.skillRow}>
          {secondRowSkills.map((skill) => (
            <div key={skill.id} className="coding-skill-card">
              <img
                src={skill.imageSrc}
                alt={skill.name}
                style={{ width: "50px" }}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
