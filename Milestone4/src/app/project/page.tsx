import React from "react";
import "../globals.css";
import ProjectPreview from "@/app/components/projectPreview";
import connectDB from "@/app/helpers/db";
import ProjectModel from "@/app/database/projectSchema";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await ProjectModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Project() {
  const projectData = await getProjects();

  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <div>
      {projectData &&
        projectData.map((project) => (
          <ProjectPreview
            key={project.projectID}
            _id={project._id}
            title={project.title}
            description={project.description}
            content={project.content}
            comments={project.comments}
          />
        ))}
    </div>
  );
}
