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
          Full Stack Web Developer with experience in the automotive industry,
          where I worked as responsible for customer service processes in
          after-sales and sales. <br /> <br /> Recently I successfully completed
          the Full Stack web development bootcamp where I acquired knowledge in
          Front-end, Back-end, Agile methodologies, GIT, data structure and
          algorithms with specialization in technologies such as JavaScript,
          React, Next, Redux Node.js, PostgreSQL, Express and Sequelize. <br />{" "}
          <br />
          My previous experiences have provided me with valuable skills, such as
          leading teams, collaborating effectively, analyzing massive data and
          optimizing processes for continuous improvement. As a professional, I
          stand out for my ability to face challenges, learn quickly and
          collaborate effectively.
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
