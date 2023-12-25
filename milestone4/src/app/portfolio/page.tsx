import React from "react";
import style from "./page.module.css";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";
import ProjectPreview from "@/components/projectPreview";

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all projects and sort by date
	    const projects = await Project.find().sort({ date: 1 }).orFail()
			// send a response as the projects as the message
	    return projects
	} catch (err) {
	    return null
	}
}

export default async function Portfolio() {
    
    const projectList = await getProjects();

    if(projectList == null) {
        return(<div>Oops, come back later. No Projects.</div>);
    }
    else {
        return (<div>
            <main>
                  <h1 className={style["page-title"]}>Projects</h1>
                  <div className={style["projectList"]} id="projectList">
                  {projectList.map(project => 
                  <ProjectPreview 
                          link={project.link}
                          description={project.description}
                          title={project.title}
                          date={project.date}
                          linkImage={project.linkImage}
                          key={project.id}                 
                          />
                  )}
                  </div>
              </main>
            </div>);
    }
}