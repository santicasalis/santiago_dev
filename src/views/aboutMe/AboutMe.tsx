import React from "react";
import santi from "../../assets/santit.png";
import styles from "../aboutMe/aboutMe.module.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
export const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.profileContainer}>
        <img
          src={santi}
          alt="Profile Image"
          style={{
            borderRadius: "50%",
            width: "300px",
            height: "300px",
          }}
        />
        <div className={styles.santiago}>Santiago Casalis</div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconItem}>
            <Link
              to="https://www.linkedin.com/in/santiagocasalis/"
              className={styles.link}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div className={styles.iconItem}>
            <Link
              to="https://github.com/santicasalis"
              className={styles.link}
              target="_blank"
            >
              <FaGithub />
            </Link>
          </div>
          <div className={styles.iconItem}>
            <Link to="mailto:santicasalis@gmail.com" className={styles.link}>
              <MdOutlineMail />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <p
          className={styles.description}
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Soy una persona apasionada por la tecnología, mi objetivo es formar
          parte de equipos colaborativos, donde pueda aportar y aprender, con el
          objetivo final de contribuir al crecimiento y éxito de proyectos
          tecnológicos.
          <br /> <br />
          Tengo más de 9 años de experiencia en el sector automotriz, he
          destacado como responsable de procesos de atención al cliente y
          asistente administrativo en marketing y recursos humanos.
          <br /> <br />
          Mi historial incluye liderar equipos para garantizar altos estándares
          de servicio, implementar estrategias efectivas para mejorar la
          experiencia del cliente y gestionar eficientemente reclamaciones. He
          integrado tecnologías para optimizar procesos administrativos
          <br />
          <br />
          Durante los últimos dos años, he tenido la oportunidad de vivir una
          experiencia en Europa. Mi enfoque durante este tiempo ha sido la
          combinación de desarrollo profesional y personal a través de un
          bootcamp de programación Front end y el deporte.
        </p>
      </div>
    </div>
  );
};
