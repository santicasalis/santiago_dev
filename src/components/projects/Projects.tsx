import styles from "../projects/projects.module.css";
import { Link } from "react-router-dom";
import React from "react";

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
          <p>{projectDescription}</p>
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
            <Link to={projectUrl}>Enlace Web </Link>
            <Link to={projectGit}>Enlace GitHub</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
