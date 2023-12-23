/* eslint-disable react/jsx-key */
import Link from "next/link";
import ProjectDB, { IProject } from "../database/projectSchema";
import connectDB from "../helpers/db";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await ProjectDB.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

async function Page() {
  const projectsDB = await getProjects();

  return (
    // <div>
    //   <h1 className="page-title">Portfolio</h1>
    //   <div className="project">
    //     <a href="index.html">
    //       <img src="oakland.jpg" alt="image of oakland" />
    //     </a>
    //     <div className="project-details">
    //       <p className="project-name">Personal Website</p>
    //       <p className="project-description">
    //         My portfolio website with info about my background and projects I
    //         made.
    //       </p>
    //       <a href="index.html">Learn More</a>
    //     </div>
    //   </div>
    // </div>
    <div>
      {projectsDB?.map((project: IProject) => (
        <div className="project">
          <Link href={project.link}>
            <h1>{project.title}</h1>
          </Link>
          <br />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
