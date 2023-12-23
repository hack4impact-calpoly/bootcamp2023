import React from "react";

import ProjectPreview from "../components/projectPreview";
import Project from "../database/projectSchema";

import connectDB from "../helpers/db";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Project.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Projects() {
  const projects = await getProjects();
  if (projects == null) {
    return (
      <main>
        <h1>Projects</h1>
        <p>No Projects Found</p>
      </main>
    );
  } else {
    return (
      <div>
        {projects.map((project) => (
          <ProjectPreview
            title={project.title}
            date={project.date}
            description={project.description}
            image={project.image}
            slug={project.slug}
            comments={[]}
          />
        ))}
      </div>
    );
  }
}
