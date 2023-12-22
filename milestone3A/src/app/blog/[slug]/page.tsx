import React from "react";
import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";
import style from "./page.module.css";
import { parseCommentTime } from "@/components/comment";

export default async function Page({ params }: { params: { slug: string } }) {
    const res = await fetch(`http://localhost:3000/api/blog/${params.slug}`,
        {cache: "no-store"});

    const blogData = await res.json();

    if(res.ok) {
        return(
            <main>
            <div className={style.blog}>
                <h1 className={style.title}> {blogData.title} </h1>
                <p className={style.date}> {parseCommentTime(blogData.date)} </p>
                <p className={style.description}> {blogData.description} </p>
                <div className={style.blogContent}>
                    <img src={blogData.imageSlug} className={style.image}></img>
                    <p className={style.content}> {blogData.content} </p>
                </div>
                
                <div className={style.commentSection}>
                        {blogData.comments.map((comment: IComment, index: number) => (
                            <Comment key={index} comment={comment} />
                        ))}
                </div>
            </div>
            </main>
        )
    }
    else {
        return(
            <div className="blogNotFound">"Blog Not Found"</div>
        )
    }
  }

// TODO: Add CSS styling and map comments