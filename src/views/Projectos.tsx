import React from "react";
import { ProjectsContainer } from "../components/projects/ProjectsContainer";
import styles from "../components/codingSkills/codingSkills.module.css";
const projects = [
  {
    id: 1,
    name: "Conect Ink",
    description:
      "App realizada como proyecto final del bootcamp Soy Henry. Como función principal, conecta tatuadores con clientes, permitiendo a los clientes reservar turnos con los tatuadores. Como funcionalidad adicional, tiene un apartado de red social donde los tatuadores hacen publicaciones e interactúan con los demás tatuadores y con los clientes.",
    image: "/src/assets/connectink.png",
    technologies: [
      "/src/assets/next.png",
      "/src/assets/react.png",
      "/src/assets/nodejs.png",
      "/src/assets/firebase.png",
      "/src/assets/redux.png",
      "/src/assets/express.png",
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
      "consiste en una pagina web que te permite gestionar tus tareas. Es una aplicacion creada con Vue.js que permite a usuarios crear una cuenta, añadir tareas a completar, editarlas, marcarlas como completadas y finalmente borrarlas. Nuestra pagina web esta vinculada a una base de datos, donde estaremos almacenando todos los datos de usuarios y las tareas.",
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
    name: "Circle",
    description:
      "consiste en una pagina web que te permite gestionar tus tareas. Es una aplicacion creada con Vue.js que permite a usuarios crear una cuenta, añadir tareas a completar, editarlas, marcarlas como completadas y finalmente borrarlas. Nuestra pagina web esta vinculada a una base de datos, donde estaremos almacenando todos los datos de usuarios y las tareas.",
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
      "El mismo consiste en un Ecommerse de vehiculos de la marca Ford. Utilizando React y firebase como base de datos",
    image: "/src/assets/ford.png",
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
    <div>
      <div className={styles.skillTitle}>Projects</div>
      <ProjectsContainer projects={projects} />
    </div>
  );
};
