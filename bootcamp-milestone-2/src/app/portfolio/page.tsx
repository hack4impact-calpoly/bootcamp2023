import Link from "next/link"
import connectDB from "@/helpers/db"
import Project, { projectSchema } from "@/database/projectSchema"
import ProjectPreview from "@/components/projectPreview"
import style from './comment.module.css'
import PostComment from "@/components/postComment"

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

async function getComments() {
    try {
        const res = await fetch(`https://bootcamp-project-2023-chi.vercel.app/api/portfolio/comment`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch comments");
        }

        return res.json();
    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }
}

export default async function PortfolioPage() {
    const projects = await getProjects()
    const comments = await getComments()

    return (
        <>

            {projects == null ?
                (<div>
                    Error retrieving projects
                </div>)
                :
                (<div>
                    <h1 className="page-title">My Personal Website</h1>
                    {projects.map((project:any, index:number) =>
                        <ProjectPreview  key={index} {...project.toObject()} /> // This is how we call the component
                    )}
                </div>)}
            <div>
                {comments !== null ? (
                    comments.map((comment: any, index: number) => (
                        <div className={style.CommentWrapper} key={index}>
                            <p>{comment.user}</p>
                            <p>{comment.comment}</p>
                            <p>{comment.time}</p>
                        </div>
                    ))
                ) : (
                    <p>There are no comments</p>
                )}
            </div>

            <h1>Post a comment!</h1>
            <PostComment PostURL={`https://bootcamp-project-2023-chi.vercel.app/api/portfolio/comment`} />

        </>
    )
}