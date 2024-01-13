import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import ProjectPreview from '@/components/projectPreview'
import connectDB from "@/helpers/db"
import projectModel from "@/database/projectSchema"

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await projectModel.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}

export default async function Project () {
    const projectData = await getProjects();

	if(!projectData) {
		return (
			<main>
			  <h1 className="page-title">Projects</h1>
			  <p>No projects at the moment.</p>
			</main>
		  );
	}

    return <div className="Blog">
    {projectData && projectData.map((project) => 
		<ProjectPreview
		title={project.title}
		date={project.date}
		description={project.description}
		content={project.content}
		slug={project.slug}
		 />
    )}
</div>
}