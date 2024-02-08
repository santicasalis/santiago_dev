import React from "react";
import styles from "../experience/experience.module.css";
export const Experience = () => {
  const experiences = [
    // {
    //   id: 0,
    //   date: "",
    //   title: "",
    //   description: "",
    //   location: "",
    // },

    {
      id: 1,
      date: "Marzo 2023 - Agosto 2023",
      title: "Gestor de entregas - Arval BNP Paribas group",
      description:
        "Coordinar disponibilidad de los vehículos , Resolución de incidencias",
      location: "Barcelona , España",
    },
    {
      id: 2,
      date: "Enero. 2018 - Julio 2021",
      title: "Responsable de Atención al Cliente - Forcam S.A",
      description:
        "Dirección de procesos de atención al cliente en ventas y postventa.Gestión de fidelización y calidad",
      location: "Buenos Aires, Argentina",
    },
    {
      id: 3,
      date: "Agosto 2016 - Diciembre 2017",
      title: "Analista de Marketing - Forcam S.A",
      description:
        "Gestión y capacitación CRM Pilot Solution.Administrar campañas y el Ecommerce",
      location: "Buenos Aires, Argentina",
    },
    {
      id: 4,
      date: "Julio. 2013 - Julio 2016",
      title: "Administrativo en Recursos Humanos  - Forcam S.A",
      description:
        "Academic Experience. Coordinated a group of students to facilitate ",
      location: "Buenos Aires, Argentina",
    },
  ];

  return (
    <div className={styles.timeline}>
      <div className={styles.title}>Experiencia Laboral</div>
      {experiences.map((experience, index) => (
        <div key={experience.id} className={styles["timeline-item"]}>
          {index !== 0 && <div className={styles["timeline-connector"]}></div>}
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-content"]}>
            <span className={styles["timeline-time"]}>{experience.date}</span>
            <h3 className={styles["timeline-title"]}>{experience.title}</h3>
            <p className={styles["timeline-description"]}>
              {experience.description}
            </p>
            {experience.location && (
              <p className={styles["timeline-location"]}>
                {experience.location}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
