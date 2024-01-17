import React from "react";
import "../../../styles/styles.css"
import PortfolioProject from "@/components/portfolioProject";
import connectDB from "@/helpers/db";
import Projects from "@/database/projectSchema";

async function getProjects(){
    await connectDB();
    try {
        const projects = await Projects.find().sort({date: -1}).orFail()
        return projects
    }
    catch (err) {
        return null;
    }
}

export default async function Portfolio() {
    const projects = await getProjects();
    return(
        <div>
            <main>
                {projects == null  ? (
                    <div>
                        No Projects
                    </div>
                ): 
                <div>
                    {projects.map(project =>
                         <PortfolioProject key={project._id} {...project.toObject()} />
                    )}
                </div>
                }
            </main>
        </div>
    );
}