import React from "react";
import { ProjectsContainer } from "../components/projects/ProjectsContainer";
import styles from "../components/codingSkills/codingSkills.module.css";

const projects = [
  {
    id: 5,
    name: "Nutritionist website",
    description:
      "The Single Page Application (SPA) I designed for the nutritionist is an interactive and easy-to-use platform that allows your clients to access personalized information about eating habits and health. The SPA loads instantly in the browser, providing a seamless experience without the need to reload the page.",
    image:
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1708904250/webnutri_fpicyh.png",
    technologies: [
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707501970/react_guhqec.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502019/nodejs_lvz1w4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502269/js_msagw4.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502221/html_vao4kq.png",
      "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707502319/css_iwdfcw.png",
    ],
    projectUrl: "https://www.fcnutricion.com/",
    projectGit: "https://github.com/santicasalis/nutricion",
  },
  {
    id: 1,
    name: "Conect Ink",
    description:
      "The App is a social network of Tattoos. You can register as an Artist or as a client. Artists have the possibility to upload posts and manage their appointment schedules. Customers can browse and book tattoo appointments with their favorite artists.",
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
      "This App allows users to create an account, add tasks to complete, edit them, mark them as completed and finally delete them. The app is linked to a database in Supabase, where all the users' data and tasks are stored.",
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
      "This website was  created exclusively with JavaScript, HTML and CSS. This platform provides an intuitive and attractive experience to explore the company's services.",
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
      "It is an Ecommerse of Ford vehicles. Using React and firebase as a database where prices and stock of vehicles are managed.",
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
