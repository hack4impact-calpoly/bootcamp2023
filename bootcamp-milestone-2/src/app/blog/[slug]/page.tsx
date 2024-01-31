"use client"

import style from '../../components/blogPreview.module.css'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Comment from "../../components/blogComment";
import { IComment, IBlog } from "../../database/blogSchema";

type Props = {
    params: {slug: string}
}

export default function Page ({params: {slug}}: Props){
    const [isLoading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState<IBlog | null>(null);

      async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
          const formElement = e.target as HTMLFormElement;
          const inputName =
            formElement.querySelector<HTMLInputElement>('input[name="name"]');
          const inputComment = formElement.querySelector<HTMLTextAreaElement>(
            'textarea[name="comment"]'
          );
          const newComment: IComment = {
            user: inputName?.value || "Anonymous",
            comment: inputComment?.value || "",
            time: new Date(),
          };
          console.log(newComment.time);
          console.log(new Date());
    
          const res = await fetch(`/api/blog/${slug}/comment`, {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (inputName) inputName.value = "";
      if (inputComment) inputComment.value = "";

      if (res.status === 200) {
        setBlog({
          title: blog?.title || "",
          date: blog?.date || new Date().toDateString(),
          description: blog?.description || "",
          image: blog?.image || "",
          slug: blog?.slug || "",
          comments: blog ? [...blog.comments, newComment] : [newComment],
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const fetchBlogData: Function = async () => {
      const response = await fetch(`http://localhost:3000/api/blog/${slug}`);
      const data = await response.json();
      setBlog(data);
    };
    fetchBlogData();
  }, [slug]); 
  

    if (blog){
        return (
        <div className={style.row}>
        <div className={style.column}>
            <Link className={style.link} href="/blog">Back</Link>
            <h1 className={style.blogTitle}> {blog.title} </h1> 
            <h2 className={style.blogData}> {blog.date} </h2>
            <div className={style.blogContainer}>
                <p className="blog-description"> {blog.description} </p>
                <Image className={style.image} src={blog.image} width="500" height="500" alt="Image of blog post" />
            </div>
      </div>

      <span className={style.column}>
      <h2 className={style.blogTitle}>Comments:</h2>
                {(blog.comments)?.map((comment: IComment, index:number) => (
	                <Comment key={index} comment={comment} />
	            ))}
      </span>
      <div className={style.column}>
        <h3 className={style.blogTitle}>Leave a Comment!</h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                          <label>Name:</label>
                          <br />
                          <input type="text" name="name" placeholder="name" />
                      </div>
                      <div>
                        <label>Comment:</label>
                        <textarea name="comment" placeholder="comment" />
                        <br />
                        <input type="submit" value="Submit" />
                      </div>
                    </form>
      </div>
      </div>
      )
    } else {
        return (
          <div>
            Error
          </div>
        )
    }
}