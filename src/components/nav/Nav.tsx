import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./nav.module.css";
import logo from "../../assets/logo.png";
interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Sobre Mi", path: "/aboutme" },
  { label: "Experiencia", path: "/experience" },
  { label: "Contacto", path: "/contact" },
];
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__nav}>
        <Link to="/" className={styles.navbar__logo}>
          <img src={logo} alt="" style={{ width: "60px", height: "60px" }} />
        </Link>
        <ul
          className={`${styles.navbar__list} ${
            isMenuOpen ? styles.navbar__open : styles.navbar__closed
          }`}
        >
          {navItems.map((item) => (
            <li key={item.label} className={styles.navbar__listItem}>
              <Link to={item.path} className={styles.navbar__link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.navbar__menuButton} onClick={toggleMenu}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
};
