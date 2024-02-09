import styles from "../projects/projects.module.css";
import { Link } from "react-router-dom";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export const Projects = ({
  projectName,
  projectDescription,
  projectImage,
  projectTecnology,
  projectUrl,
  projectGit,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          {/*  cara frontal */}
          <h2>{projectName}</h2>
          <img src={projectImage} alt={projectName} />
          <p className={styles.projectDescription}>{projectDescription}</p>
        </div>
        <div className={styles.cardBack}>
          {/* cara posterior */}
          <div>
            <h2>Tecnologías</h2>
            <div className={styles.techContainer}>
              {projectTecnology.map((tech, index) => (
                <div key={index} className={styles.techItem}>
                  <img src={tech} alt="" style={{ width: "50px" }} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.urlContainer}>
            <Link to={projectUrl} className={styles.link} target="_blank">
              <TbWorldWww style={{ fontSize: "24px", marginRight: "4px" }} />{" "}
              Enlace Web{" "}
            </Link>
            <Link to={projectGit} className={styles.link} target="_blank">
              {" "}
              <FaGithub
                style={{ fontSize: "24px", marginRight: " 4px" }}
              />{" "}
              Enlace GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
