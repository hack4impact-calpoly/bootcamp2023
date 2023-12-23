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

    return (
        <>

            {projects == null ?
                (<div>
                    Error retrieving projects
                </div>)
                :
                (<div>
                    <h1 className="page-title">My Personal Website</h1>
                    {projects.map((project) =>
                        <ProjectPreview  {...project.toObject()} /> // This is how we call the component
                    )}
                </div>)}
{/* Add Load comments here */}
        </>
    )
}