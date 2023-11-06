import Image from "next/image";
import styles from "./portfolio.module.css";
import projects from "./projects";

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.portfoliotitle}>Portfolio</h1>
      <div className={styles.projectsgrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            <div className={styles.projectdetails}>
              <p className={styles.projectname}>{project.name}</p>
              <p className={styles.projectdescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
