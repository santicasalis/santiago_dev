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
          I am a person passionate about technology, my goal is to be part of
          collaborative teams, where I can contribute and learn, with
          collaborative teams, where I can contribute and learn, with the
          ultimate goal of contributing to the the ultimate goal of contributing
          to the growth and success of technological projects. technological
          projects.
          <br /> <br />
          I have more than 9 years of experience in the automotive sector, I
          have excelled as a customer service as responsible for customer
          service processes and administrative assistant in marketing and human
          administrative assistant in marketing and human resources.
          <br /> <br />
          My track record includes leading teams to ensure high standards of
          service, implementing effective service standards, implementing
          effective strategies to improve the customer experience and customer
          experience and efficiently managing complaints. I have integrated
          technologies to optimize administrative processes.
          <br />
          <br />
          During the last two years, I have had the opportunity to live an
          experience in Europe. experience in Europe. My focus during this time
          has been the combination of professional and personal development
          through a Front end programming bootcamp and sports. through a Front
          end programming bootcamp and sports.
        </p>
      </div>
    </div>
  );
};
