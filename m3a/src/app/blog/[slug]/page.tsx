/* eslint-disable react/jsx-key */
import React from "react";
import style from "./blog.module.css";
import { IComment } from "@/app/database/blogSchema";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/${slug}`, {
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

export default async function Page({ params: { slug } }: Props) {
  //slug = params.slug;
  const blog = await getBlog(slug);

  if (blog) {
    return (
      <>
        <div className={style.blog}>
          <div className={style.title}>{blog.title}</div>
          <div className={style.date}>Date Posted: {blog.date}</div>
          <div className={style.content}>{blog.content}</div>
        </div>
        <div className={style.comments}>
          Comments: 
          {blog.comments.map((comment : IComment) => (
            <div className={style.comment}>
              <div className={style.user}>{comment.user}</div>
              <div className={style.comment}>{comment.comment}</div>
              <div className={style.time}></div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return <>Blog not found.</>;
  }
}
