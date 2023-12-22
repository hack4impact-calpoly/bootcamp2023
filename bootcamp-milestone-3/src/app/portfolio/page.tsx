import Link from 'next/link';
import React from 'react';
import ProjectPreview from '../components/projectPreview';
import Project from '../database/projectSchema';
import connectDB from "../helpers/db";

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}

export default async function ProjectHome() {
    const projects = await getProjects()
    if (projects == null) {
        return (<main>
            <div className="container-fluid">
                <h1><b>Portfolio</b></h1>
                <div id="dte" className="row justify-content-center align-items-center m-2">
                    <div className="col-5">
                        <img src="assets/dte-website.gif" alt="" style={{height: "100%", width: "100%"}}/>
                    </div>
                    <div className="col-5 d-flex flex-column align-items-center">
                        <h2><b>DTE Distinction Award</b></h2>
                        <p style={{marginBottom: "0"}}><span>Punahou School - Honolulu, Hawaii</span><br/>The Design Technology & Engineering (DTE) Distinction Award is a multi-year process for students at Punahou School that have a deep interest in tech or engineering subjects. There are two paths: the engineering path, and computer science path (which I pursued). See below for my high school portfolio or more about the distinction!</p>
                        <div className="d-flex align-items-center justify-content-center">
                            <Link className="learn_more_btn port-btn" type="button" target="_blank" href="https://flowercake13.github.io/DTE-Profile/">See My Portfolio!</Link>
                            <Link className="learn_more_btn port-btn" type="button" target="_blank" href="https://www.punahou.edu/design-technology-and-engineering/awards/dte-distinction">Learn More About DTE's Distinction!</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{margin: "0", width: "70%"}}>
                <p>errorr finding projects</p>
            </div>
        </main>)
    }
    else {
        return (<main>
            <div className="container-fluid">
                <h1><b>Portfolio</b></h1>
                <div id="dte" className="row justify-content-center align-items-center m-2">
                    <div className="col-5">
                        <img src="assets/dte-website.gif" alt="" style={{height: "100%", width: "100%"}}/>
                    </div>
                    <div className="col-5 d-flex flex-column align-items-center">
                        <h2><b>DTE Distinction Award</b></h2>
                        <p style={{marginBottom: "0"}}><span>Punahou School - Honolulu, Hawaii</span><br/>The Design Technology & Engineering (DTE) Distinction Award is a multi-year process for students at Punahou School that have a deep interest in tech or engineering subjects. There are two paths: the engineering path, and computer science path (which I pursued). See below for my high school portfolio or more about the distinction!</p>
                        <div className="d-flex align-items-center justify-content-center">
                            <Link className="learn_more_btn port-btn" type="button" target="_blank" href="https://flowercake13.github.io/DTE-Profile/">See My Portfolio!</Link>
                            <Link className="learn_more_btn port-btn" type="button" target="_blank" href="https://www.punahou.edu/design-technology-and-engineering/awards/dte-distinction">Learn More About DTE's Distinction!</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex flex-column align-items-center">
                <h3><b>Hack4Impact Projects</b></h3>
                <div style={{margin: "0", width: "70%"}}>
                    {projects.map(project => 
                    <ProjectPreview {...project.toObject()} /> // This is how we call the component
                    )}
                </div>
            </div>  
        </main>)
    }
}