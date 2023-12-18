import React from "react";
import PortfolioPreview from '@/app/components/portfolioPreview';
import "../styles/website.css"
import connectDB from "@/helpers/db";
import Projects from "@/database/projectSchema"

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Projects.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Portfolio() {
    const projects = await getProjects();
    return(
    <main>
        <h2 className="page-title">Projects</h2>
        <div>
            {projects == null ? (
                <div className = "no-project">
                    No Projects Yet
                </div>):
                <div>
                    {projects.map(project =>
                        <PortfolioPreview  {...project.toObject()} />
                    )}
                </div>
            }
        </div>
    </main>
        
    );

}