import styles from "./page.module.css";
// import projects from "../portfolioData.ts";
import PortfolioProject from "../components/portfolioProject.tsx";
import { IProject } from "@/database/projectSchema.ts"


async function getProjects() {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
      cache: 'no-store' // so if we add new blogs, they will show up when the page is refreshed
    })
    if (!res.ok){
      throw new Error("Failed to fetch projects.") 
    }
    return res.json() // return the fetched data as JSON

  } catch (error) {
    console.log(error)
    return null
  }
}


export default async function Portfolio() {
  const {projects} = await getProjects();
  if (projects == null) {   // Handle the null case
    return(
      <h1>Projects</h1> // Don't give any projects
    )
  }

  return (
    <div className={styles.catalog}>
      <h1>Projects</h1>
      {projects.map( (project : IProject) => 
            <PortfolioProject
                {...project}
                key={project.slug}
            ></PortfolioProject>
            )}
    </div>
  );
}
