import ProjectPreview from "@/components/ProjectPreview/ProjectPreview";
// import { projects } from "../data/portfolioData";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";

async function getProjects(){
  await connectDB() // function from db.ts before

  try {
      // query for all projects
      const projects = await Project.find().orFail()
      // send a response as the blogs as the message
      return projects
  } catch (err) {
      return null
  }
}

export default async function Portfolio() {

  let projects = await getProjects();
  
  return (
    <main className="flex flex-col p-20">
      <h3 className="text-3xl font-semibold text-white px-5 py-5">Projects</h3>
      <ul className="overflow-y-scroll">
        {projects?.map((project) => {
          return (
            <li className="w-1/2" key={project.title}>
              <ProjectPreview
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
