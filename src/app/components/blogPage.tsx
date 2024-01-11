"use client";
import React from "react";
import Link from "next/link";
import style from "./blogPreview.module.css";
// change style later
import { IBlog, IComment } from "@/database/blogSchema";
import Comment from "./comment";
import CreateComment from "@/app/components/makeComment";

export default function BlogPage(blogpage: IBlog) {
  return (
    <div className={style.blogpage}>
      <h2 className="page-title">{blogpage.title}</h2>
      <p>
        {blogpage.date.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
      <p>{blogpage.content}</p>
      <Link className={style.backlink} href="/blog">
        Back To All Blogs
      </Link>
      <div className={style.allcomments}>
        <h3>Comments</h3>
        {blogpage.comments.map((comment: IComment, index: number) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <CreateComment slug={blogpage.slug} content={"blog"} />
      <h3>Space</h3>
    </div>
  );
}
