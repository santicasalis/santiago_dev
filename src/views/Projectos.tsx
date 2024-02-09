import React from "react";
import { ProjectsContainer } from "../components/projects/ProjectsContainer";
import styles from "../components/codingSkills/codingSkills.module.css";

const projects = [
  {
    id: 1,
    name: "Conect Ink",
    description:
      "La App es una red social de Tatuajes. Te puedes registar como Artista o como cliente. Los artistas tienen la posibilidad de subir publicaciones y gestionar sus agenda de turnos. Los clientes pueden explorar y realizar reservas de turnos para tatuarse con sus artistas favorito",
    image:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501566/connectink_zoz64i.png",
    technologies: [
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501904/next_ceogif.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501970/react_guhqec.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502019/nodejs_lvz1w4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502060/firebase_nye7vt.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502135/redux_ongh0v.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502166/expre_febvj9.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502190/postgre_hipcv8.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502221/html_vao4kq.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502319/css_iwdfcw.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502269/js_msagw4.png",
    ],
    projectUrl: "https://connectink.vercel.app/",
    projectGit: "https://github.com/santicasalis/ConnectInk",
  },

  {
    id: 3,
    name: "ToDo list",
    description:
      "Es una app que te permite gestionar tus tareas.Permite a los usuarios crear una cuenta, añadir tareas a completar, editarlas, marcarlas como completadas y finalmente borrarlas.La app esta vinculada a una base de datos en Supabase, donde se almacenantodos los datos de los usuarios y sus tareas.",
    image:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501640/todo_bkvxne.png",
    technologies: [
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502982/vue_qbtk2z.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502019/nodejs_lvz1w4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502944/supabase_a3wpaz.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502269/js_msagw4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502221/html_vao4kq.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502319/css_iwdfcw.png",
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
    image:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501707/circle_egog9f.png",
    technologies: [
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502269/js_msagw4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502221/html_vao4kq.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502319/css_iwdfcw.png",
    ],
    projectUrl: "https://midproyect-6z41.vercel.app/",
    projectGit: "https://github.com/santicasalis/Circle-Agency",
  },
  {
    id: 2,
    name: "Ecommerce Ford",
    description:
      "Es un Ecommerse de vehiculos de la marca Ford. Utilizando React y firebase como base de datos dónde se maneja los precios y stock de los vehículos.",
    image:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501479/forda_jvmtho.png",
    technologies: [
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501970/react_guhqec.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502019/nodejs_lvz1w4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502269/js_msagw4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502060/firebase_nye7vt.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502221/html_vao4kq.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502319/css_iwdfcw.png",
    ],
    projectUrl: "https://fordecommerce.netlify.app/",
    projectGit: "https://github.com/santicasalis/Ecommerse-Ford-",
  },
];

export const Projectos = () => {
  return (
    <div
      style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.skillTitle}>Projects</div>
      <ProjectsContainer projects={projects} />
    </div>
  );
};
