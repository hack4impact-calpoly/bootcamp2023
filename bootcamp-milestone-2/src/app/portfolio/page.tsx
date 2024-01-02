import React from "react";
import connectDB from "@/database/helpers/db";
import ProjectPreview from "@/components/projectPreview";
import Projects from "@/database/projectSchema";
import projectSchema from "@/database/projectSchema";

async function getProjects() {
    await connectDB();

    try {
     
      const projs = await Projects.find().orFail();
      // send a response as the blogs as the message
      return projs;
    } catch (err) {
      return null;
    }
  }
  
  export default async function Portfolio() {
    const projects = await getProjects();

      return (
          <main>
            <h2 className="page-title">Sriya&#39;s Portfolio</h2>
            <div>
            {projects?.map((project) => 
              <ProjectPreview
                title={project.title}
                slug = {project.slug}
                date = {(project.date)}
                description={project.description}
                content={project.content}
                comments={project.comments} 
                image = {project.image}
                key={project._id}
                />
            )}
          </div>
          <br></br>
          </main>
      );
    }; 
