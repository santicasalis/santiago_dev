import React from "react";
import styles from "../education/education.module.css";
import iron from "../../assets/ironh.png";
import henry from "../../assets/henry.png";
export const Education = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>Certifications </div>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          {/*  cara frontal */}
          <h2>Henry FullStack Bootcamp</h2>
          <p className={styles.timeline}> August 2023 - December 2023</p>
          <img src={henry} alt="certificado" />
          <p className={styles.projectDescription}>
            I completed an intensive course in Full Stack web programming, where
            I acquired solid skills in acquired solid skills in web application
            development. web applications. I immersed myself in Node.js and
            Express to build servers, while Sequelize and PostgreSQL gave me the
            tools to efficiently necessary tools to efficiently manage
            relational databases. relational databases. On the client-side, I
            mastered React and Redux. and I learned to apply the agile Scrum
            methodology to manage projects collaboratively and efficiently. in a
            collaborative and efficient way.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardFront}>
          {/*  cara frontal */}
          <h2>IronHack Front-end Bootcamp</h2>
          <p className={styles.timeline}> October 2022 - December 2022</p>
          <img src={iron} alt="certificado" />
          <p className={styles.projectDescription}>
            I completed a 250-hour intensive course in Frontend Programming with
            a special focus on JavaScript and Vue.js. with a special focus on
            JavaScript and Vue.js.
          </p>
        </div>
      </div>
    </div>
  );
};
