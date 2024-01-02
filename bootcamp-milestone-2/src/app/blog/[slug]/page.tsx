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
  
  async function getBlogs(slug: string) {
    await connectDB(); // function from db.ts before
  
    try {
        const res = await fetch(`https://bootcamp-project-2023-seven.vercel.app/api/blog/${slug}`, 
        {
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

  export default async function Blog({ params: { slug } }: Props) {
    const blog = await getBlogs(slug);

    if (blog) {

      return (
        <main>
            <h1 className="page-title">{blog.title}</h1>
            <h2 className="date">{new Date(blog.date).toLocaleDateString()}</h2>
            <div className="blog-entry">
            <h2 className="section-title" style={{ textAlign: 'center' }}>
            </h2>            
            <Image src={blog.image} alt={blog.title} width={400} height={300} />
            </div>
            <p className="entry-info">{blog.content}</p>
            <div className={styles.commentSection}>
            <h2>Comments</h2>
            {blog.comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
            ))} 
            <br></br>
            <div>
              <h2>Add a Comment!</h2>
              <AddComment slug={`blog/${slug}`} />
            <br></br>
          </div>
          </div>
          <br></br>
            </main>
      );
    } else {
      return (
        <main>
          <h1>Blog Not Found</h1>
        </main>
      );
    }
  }