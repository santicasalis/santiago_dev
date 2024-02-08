import React from "react";
import styles from "../footer/footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Link to="/" className={styles.navbar__logo}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
        />
      </Link>

      <div className={styles.iconsContainer}>
        <div className={styles.iconItem}>
          <Link
            to="https://www.linkedin.com/in/santiagocasalis/"
            className={styles.link}
            target="_blank"
          >
            <FaLinkedin className={styles.iconSize} />
          </Link>
        </div>
        <div className={styles.iconItem}>
          <Link
            to="https://github.com/santicasalis"
            className={styles.link}
            target="_blank"
          >
            <FaGithub className={styles.iconSize} />
          </Link>
        </div>
        <div className={styles.iconItem}>
          <Link to="mailto:santicasalis@gmail.com" className={styles.link}>
            <MdOutlineMail className={styles.iconSize} />
          </Link>
        </div>
      </div>
    </div>
  );
};
