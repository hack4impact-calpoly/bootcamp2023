import React from "react";
import ProjectPreview from "@/components/projectPreview";
import Project from "@/database/projectSchema";
import connectDB from "@/helpers/db";
import PageTitle from "@/components/page-title";

async function getProjects(){
    
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find().orFail();
			// send a response as the blogs as the message
	    return projects;
	} catch (err) {
    console.log(err);
	    return null;
	}
}

export default async function ProjectPage() {
  const projects = await getProjects();
  if (projects == null) {
    return (
      <main>
          <PageTitle title="Portfolio"/>

        <p>No Projects</p>
      </main>
    );
  } else {
    return (
      <main>
        <PageTitle title="Portfolio"/>
          {projects.map((project) => (
            <ProjectPreview 
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
      </main>
    );
  }
}



