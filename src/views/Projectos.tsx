import React from "react";
import { ProjectsContainer } from "../components/projects/ProjectsContainer";
import styles from "../components/codingSkills/codingSkills.module.css";

const projects = [
  {
    id: 1,
    name: "Conect Ink",
    description:
      "La App es una red social de Tatuajes. Te puedes registar como Artista o como cliente. Los artistas tienen la posibilidad de subir publicaciones y gestionar sus agenda de turnos. Los clientes pueden explorar y realizar reservas de turnos para tatuarse con sus artistas favorito",
    image: "conect",
    technologies: [
      "https://santiago-o4epk27id-santicasalis.vercel.app/assets/next-cLW6dkpQ.png",
      "https://santiago-o4epk27id-santicasalis.vercel.app/assets/react-5kHne8MF.png",
      "https://santiago-o4epk27id-santicasalis.vercel.app/assets/nodejs-V3BuGDC6.png",
      "/src/assets/firebase.png",
      "/src/assets/redux.png",
      "/src/assets/expre.png",
      "/src/assets/postgre.png",
      "/src/assets/html.png",
      "/src/assets/css.png",
      "/src/assets/js.png",
    ],
    projectUrl: "https://connectink.vercel.app/",
    projectGit: "https://github.com/santicasalis/ConnectInk",
  },

  {
    id: 3,
    name: "ToDo list",
    description:
      "Es una app que te permite gestionar tus tareas.Permite a los usuarios crear una cuenta, añadir tareas a completar, editarlas, marcarlas como completadas y finalmente borrarlas.La app esta vinculada a una base de datos en Supabase, donde se almacenantodos los datos de los usuarios y sus tareas.",
    image: "/src/assets/todo.png",
    technologies: [
      "/src/assets/vue.png",
      "/src/assets/nodejs.png",
      "/src/assets/supabase.png",
      "/src/assets/js.png",
      "/src/assets/html.png",
      "/src/assets/css.png",
    ],
    projectUrl: "https://todolistiron.vercel.app/inicio",
    projectGit: "https://github.com/santicasalis/ToDo-list-app",
  },
  ,
  {
    id: 4,
    name: "Circle Agency",
    description:
      "Es una página web creada exclusivamente con JavaScript, HTML y CSS. Esta plataforma te brinda una experiencia intuitiva y atractiva para explorar los servicios de la empresa. ",
    image: "/src/assets/circle.png",
    technologies: [
      "/src/assets/js.png",
      "/src/assets/html.png",
      "/src/assets/css.png",
    ],
    projectUrl: "https://midproyect-6z41.vercel.app/",
    projectGit: "https://github.com/santicasalis/Circle-Agency",
  },
  {
    id: 2,
    name: "Ecommerce Ford",
    description:
      "Es un Ecommerse de vehiculos de la marca Ford. Utilizando React y firebase como base de datos dónde se maneja los precios y stock de los vehículos.",
    image: "/src/assets/forda.png",
    technologies: [
      "/src/assets/react.png",
      "/src/assets/nodejs.png",
      "/src/assets/js.png",
      "/src/assets/firebase.png",
      "/src/assets/html.png",
      "/src/assets/css.png",
    ],
    projectUrl: "https://fordecommerce.netlify.app/",
    projectGit: "https://github.com/santicasalis/Ecommerse-Ford-",
  },
];

export const Projectos = () => {
  return (
    <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <div className={styles.skillTitle}>Projects</div>
      <ProjectsContainer projects={projects} />
    </div>
  );
};
