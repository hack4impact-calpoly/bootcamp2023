import React from "react";
import style from "./portfolio.module.css";
import projectSchema from "../database/projectSchema";
import connectDB from "../database/db";
import Project from "../components/project";

async function Page() {
  await connectDB();

  try {
    const projects = await projectSchema.find().orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Projects() {
  const projects = await Page();
  if (projects == null) {
    return (
      <main>
        <div className={style.project}>
          <h1 className={style.pageTitle}>Portfolio</h1>
          <p>No projects currently.</p>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h1 className={style.pageTitle}>Portfolio</h1>
          {projects.map((project) => (
            <Project
              title={project.title}
              description={project.description}
              slug={project.slug}
              image={project.image}
              comments={project.comments}
            />
          ))}
        </div>
      </main>
    );
  }
}
