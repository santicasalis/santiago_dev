import React from "react";
import styles from "../sectionHello/sectionhello.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
export const SectionHello = () => {
  return (
    <>
      <div className={styles.sectionHelloContainer}>
        <div className={styles.hello}> HELLO, MY NAME IS SANTI</div>

        <div className={styles.fullStack}>Full Stack Developer</div>

        <div className={styles.description}>
          Un apasionado desarrollador web full stack con una sólida base en la
          industria automotriz. Mi experiencia en la gestión de procesos de
          atención al cliente y calidad de servicios me permite enfocarme en
          crear soluciones innovadoras que optimicen la experiencia del usuario.
          Con un enfoquecentrado en la calidad y la eficiencia.
        </div>
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
    </>
  );
};
