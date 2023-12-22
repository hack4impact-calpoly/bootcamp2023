import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";
import { Project } from "../projectData";
import connectDB from "@/helpers/db";
import ProjectSchema from "@/database/projectSchema";
import CommentComponent from "../../components/comment";
import { Comment } from "../commentData";

async function getProjects(): Promise<null | Project[]> {
	await connectDB();

	try {
    const projects = await ProjectSchema.find().orFail();
    return projects;
	} catch (err) {
    return null;
	}
}

export default async function Portfolio() {
  const projects = await getProjects();

  if (projects === null) {
    return (
      <div>
        Failed to load projects
      </div>
    )
  }
  
  return (
    <>
      <h1 className="page-title">Portfolio</h1>
      <div className={style.project}>
        {projects.map(project => {
          project = JSON.parse(JSON.stringify(project))
          return (
            <>
              <Link href={`${project.href}`}>
                <Image src={`${project.src}`} alt={`${project.alt}`} width="5000" height="5000" />
              </Link>
              <div className={style["project-details"]}>
                <p className={style["project-name"]}>{project.name}</p>
                <p className={style["project-description"]}>{project.description}</p>
                {project.comments.map((comment: Comment) => (
                  <CommentComponent comment={comment} />
                ))}
                <Link href={`${project.href}`}>Learn more</Link>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
}