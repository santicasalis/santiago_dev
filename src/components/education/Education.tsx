import React from "react";
import styles from "../education/education.module.css";
import iron from "../../assets/ironh.png";
import henry from "../../assets/henry.png";
export const Education = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>Experiencia Académica</div>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          {/*  cara frontal */}
          <h2>Henry FullStack Bootcamp</h2>
          <p className={styles.timeline}> Agosto 2023 - Diciembre 2023</p>
          <img src={henry} alt="certificado" />
          <p className={styles.projectDescription}>
            Completé un curso intensivo de programación web Full Stack, donde
            adquirí adquirí habilidades sólidas en el desarrollo de aplicaciones
            web. Me sumergí en Node.js y Express para construir servidores,
            mientras que Sequelize y PostgreSQL me proporcionaron las
            herramientas necesarias para gestionar eficientemente bases de datos
            relacionales. En el lado del cliente, dominé React y Redux. y
            aprendí a aplicar la metodología ágil Scrum para gestionar proyectos
            de manera colaborativa y eficaz.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardFront}>
          {/*  cara frontal */}
          <h2>IronHack Front-end Bootcamp</h2>
          <p className={styles.timeline}> Octubre 2022 - Diciembre 2022</p>
          <img src={iron} alt="certificado" />
          <p className={styles.projectDescription}>
            Completé un curso intensivo de 250 horas en Programación Frontend
            con un enfoque especial en JavaScript y Vue.js.
          </p>
        </div>
      </div>
    </div>
  );
};
