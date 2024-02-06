import React from "react";
import { Projects } from "./Projects";
import styles from "../projects/projects.module.css";
export const ProjectsContainer = ({ projects }) => {
  return (
    <div className={styles.proyectsContainer}>
      {projects.map((project) => (
        <Projects
          key={project.id}
          projectName={project.name}
          projectDescription={project.description}
          projectImage={project.image}
          projectTecnology={project.technologies}
          projectUrl={project.projectUrl}
          projectGit={project.projectGit}
        />
      ))}
    </div>
  );
};
