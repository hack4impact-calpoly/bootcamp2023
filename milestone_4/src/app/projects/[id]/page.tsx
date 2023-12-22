import Comment from "@/components/comment";
import type { IComment } from "@/database/commentSchema";
import styles from './projectEntry.module.css'; 
import { NEXT_PROJECT_ROOT_DIST } from "next/dist/build/webpack-config";
import Link from "next/link";


async function getProject(id: number) {
    try {
        const project = `http://localhost:3000/api/projects/${id}`;
        const res = await fetch(project, {
            cache: "no-store",	
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }
        return res.json();

    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }
}

export default async function ProjectEntry({ params } : { params: { id: number } }) {
    const project = await getProject(params.id);
    if (project){
      return (
        <main>
          <div className={styles.container}>
            <img src={project.image} alt={project.name} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <ul className={styles.pointList}>
                <li>{project.point1}</li>
                <br></br>
                <li>{project.point2}</li>
                <br></br>
                <li>{project.point3}</li>
                <br></br>
              </ul>
            </div>
          </div>
          <h2>Comments</h2>
              <>
              {project.comments?.map((c: IComment) => (
                  <Comment
                      key={(c._id)}
                      comment={{
                          _id: c._id,
                          user: c.user,
                          comment: c.comment,
                          date: c.date,
                      }}
                  />
              ))}
              </>
        </main>


      );
    }
    else {
      return (
          <h1> 404 Blog NOT FOUND </h1>
      );
  }
}
