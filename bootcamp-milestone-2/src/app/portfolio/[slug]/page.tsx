import React from "react";
import Image from "next/image";
import Comment from "@/components/commentPreview";
import connectDB from "@/database/helpers/db";
import AddComment from "@/components/addComment";
import styles from "./page.module.css";

//const res = await fetch(`http://localhost:3000/api/blog/${slug}`, 

type Props = {
    params: { slug: string };
  };
  
  async function getProjects(slug: string) {
    await connectDB(); // function from db.ts before
  
    try {
        const res = await fetch(`https://bootcamp-project-2023-seven.vercel.app/api/portfolio/${slug}`, 
        {
        cache: "no-store",
        });
  
      if (!res.ok) {
        throw new Error("Failed to fetch project");
      }
  
      return res.json();
    } catch (err: unknown) {
      console.log(`error: ${err}`);
      return null;
    }
  }

  export default async function Portfolio({ params: { slug } }: Props) {
    const project = await getProjects(slug);

    if (project) {

      return (
        <main>
            <h1 className="page-title">{project.title}</h1>
            <h2 className="date">{new Date(project.date).toLocaleDateString()}</h2>
            <div className="blog-entry">
            <h2 className="section-title" style={{ textAlign: 'center' }}>
            </h2>            
            <Image src={project.image} alt={project.title} width={700} height={400} />
            </div>
            <p className="entry-info">{project.content}</p>
            <div className={styles.commentSection}>
            <h2>Comments</h2>
            {project.comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
            ))} 
            <br></br>
            <div>
              <h2>Add a Comment!</h2>
              <AddComment slug={`portfolio/${slug}`} />
            <br></br>
          </div>
          </div>
          <br></br>
            </main>
      );
    } else {
      return (
        <main>
          <h1>Project Not Found</h1>
        </main>
      );
    }
  }