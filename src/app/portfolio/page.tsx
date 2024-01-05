import React from "react";
import ProjectPreview from "../components/projectPreview";
import connectDB from "../../helpers/db";
import Projects from "../../database/projectSchema";

async function getProjects() {
  await connectDB();

  try {
    const projects = await Projects.find().orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default function Portfolio() {
  return getProjects().then((projects) => {
    return (
      <main>
        <h2 className="page-title">Portfolio</h2>
        <div>
          {projects === null ? (
            <div className="no-project">No Projects Yet</div>
          ) : (
            <div>
              {projects.map((project) => (
                <ProjectPreview
                  key={project.slug}
                  title={project.title}
                  slug={project.slug}
                  date={project.date}
                  description={project.description}
                  comments={project.comments}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    );
  });
}
