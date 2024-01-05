import Link from "next/link";
import Image from "next/image";
import ProjectPreview from "../components/project";
import connectDB from "@/helpers/db";
import projectSchema from "@/database/projectSchema";

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await projectSchema.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}

export default async function Project() {
    const projectPosts = await getProjects();
    if (projectPosts) {
        return(
            <div>
                <h1 className="page-title">My Portfolio!</h1>
            <main>
                {projectPosts.map(project => 
                <ProjectPreview
                title={project.title}
                date={project.date}
                description={project.description}
                slug={project.slug}
                imgSlug = {project.imgSlug}
                imgDesc = {project.imgDesc}
                imgWidth = {project.imgWidth}
                imgHeight = {project.imgHeight}
                />
                )}
            </main>
            </div>
        )
    }   else {
            return (
                <div>
                    <h1>No projects</h1>
                </div>
            )
    }
}


