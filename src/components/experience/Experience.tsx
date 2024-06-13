import React from "react";
import styles from "../experience/experience.module.css";
export const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: "March 2023 - August 2023",
      title: "Delivery Manager - Arval BNP Paribas group",
      description:
        "Managed vehicle availability and resolved issues in a coordinated manner to ensure a smooth and efficient flow of the process.",
      location: "Barcelona , Spain",
    },
    {
      id: 2,
      date: "January. 2018 - July 2021",
      title: "Customer Service Manager - Forcam S.A.",
      description:
        "I managed in a comprehensive manner the customer service processes, both in the sales and after-sales areas. My approach included the management of customer loyalty strategies and the implementation of measures aimed at maintaining high quality standards in all aspects of service.",
      location: "Buenos Aires, Argentina",
    },
    {
      id: 3,
      date: "August 2016 - December 2017",
      title: "Marketing Analyst - Forcam S.A",
      description:
        "I oversaw the management and training of the CRM Pilot Solution, managed campaigns and Ecommerce. My focus was on optimizing customer-related processes, ensuring efficient information management and strategic execution of commercial campaigns and e-commerce operations..",
      location: "Buenos Aires, Argentina",
    },
    {
      id: 4,
      date: "July. 2013 - July 2016",
      title: "Human Resources Administrative - Forcam S.A.",
      description:
        "I administered the settlement of salaries and wages. I coordinated and executed training programs, ensuring continuous staff development. In addition, I demonstrated outstanding team management skills, fostering a productive and positive work environment.",
      location: "Buenos Aires, Argentina",
    },
  ];

  return (
    <div className={styles.timeline}>
      <div className={styles.title}>Work Experience</div>
      {experiences.map((experience, index) => (
        <div key={experience.id} className={styles["timeline-item"]}>
          {index !== 0 && <div className={styles["timeline-connector"]}></div>}
          {/* <div className={styles["timeline-dot"]}></div> */}
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
