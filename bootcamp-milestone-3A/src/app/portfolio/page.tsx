import Link from "next/link"
import style from "./portfolio.module.css"; 
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";
import ProjectPreview from "../../../components/projectPreview";

async function getProjects() {
  await connectDB();
  try {
    const blogs = await Project.find().sort({ date: -1 }).orFail();
    console.log('All Projects:', blogs);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}

export default async function project() {
  const projects = getProjects();
  if (projects) {
    return (
      <div> 
        <main> 
      <p className={style.projectName}>Here are some of my projects</p>
      </main>
        {(await projects).map((project) => 
        <ProjectPreview 
          title={project.title} 
          date={project.date} 
          description={project.description} 
          image={project.image}
          slug={project.slug}/>
        )}  
      </div>
    )
  }
}