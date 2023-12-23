import React from "react";
import Header from "../../components/header";
import Styles from './portfolio.module.css';
import connectDB from '../../helpers/db';
import ProjectPreview from '../../components/project';
import Project from '../../database/projectSchema';

/* eslint-disable */

async function getProjects() {
    await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find()
      if (projects != null) {
        const projectPreviews = projects.map((project) => (
        <ProjectPreview project={project}/> 
        ));
        return projectPreviews;
      }
			// send a response as the blogs as the message
	    return null;
	} catch (err) {
      console.error('Promise rejected with error: ' + err);
      return null;
	}
}

export default function Portfolio() {
    const projects = getProjects();

    return (
        <div className= {Styles.project}>
            <Header pageTitle="Portfolio" />
            { projects }
        </div>
);
  }