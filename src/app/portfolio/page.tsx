import React from "react";
import ProjectPreview from "../components/projectPreview";
import connectDB from "../../helpers/db";
import Projects from "../../database/projectSchema";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Projects.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();
  return (
    <main>
      <h2 className="page-title">Portfolio</h2>
      <div>
        {projects == null ? (
          <div className="no-project">No Projects Yet</div>
        ) : (
          <div>
            {projects.map((project) => (
              <ProjectPreview key={project._id} {...project.toObject()} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
