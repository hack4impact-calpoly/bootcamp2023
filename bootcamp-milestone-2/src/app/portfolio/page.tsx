import Link from "next/link"
import connectDB from "@/helpers/db"
import Project, { projectSchema } from "@/database/projectSchema"
import ProjectPreview from "@/components/projectPreview"

async function getProjects() {
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

export default async function PortfolioPage() {
    const projects = await getProjects()

    return (<div>
        <h1 className="page-title">Portfolio</h1>
          <main>
            { projects && projects.length > 0 ? (
                projects.map(project => 
                    <ProjectPreview

                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    url={project.url}
                    slug={project.slug}
                  />
            )) : (
                <p>No projects available</p>
            )}
          </main>
</div>) 
}