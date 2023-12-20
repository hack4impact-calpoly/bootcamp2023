import styles from "./portfolio.module.css";
import connectDB from "../database/db";
import Project from "../database/projectSchema";

interface ProjectData {
  name: string;
  description: string;
  link: string;
  image: string;
}

export default async function Portfolio() {
  async function getProjects() {
    await connectDB(); // function from db.ts before

    try {
      // query for all blogs and sort by date
      return await Project.find().sort({ date: -1 }).orFail();
    } catch (err) {
      return null;
    }
  }

  const projects = await getProjects();

  return (
    <div className={styles.portfolio}>
      <h1 className={styles.portfoliotitle}>Portfolio</h1>
      <div className={styles.projectsgrid}>
        {projects &&
          projects.map((project: ProjectData, index) => (
            <div key={index} className={styles.project}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} />
              </a>
              <div className={styles.projectdetails}>
                <p className={styles.projectname}>{project.name}</p>
                <p className={styles.projectdescription}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
