"use client";
import React, { useState, useEffect } from "react";
import { IComment, IBlog } from "../../database/blogSchema";
import style from "../blog.module.css";
import Comment from "../../components/comment";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

function parseCommentTime(time: Date) {
  /*
    Parses MongoDB/TS date object
    :param time: date object
    :return: string reprsenting date
    */
  // Convert to Los Angeles time
  const losAngelesDate = new Date(
    time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );

  // Format the date as desired
  const formattedDate = losAngelesDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}

export default function Blog({ params: { slug } }: Props) {
  const [blog, setBlog] = useState<IBlog | null>(null);

  async function getBlog(slug: string) {
    try {
      const res = await fetch(`/api/blog/${slug}`, {
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
        date: new Date(),
      };
      console.log(newComment.date);
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
          date: blog?.date || new Date(),
          description: blog?.description || "",
          image: blog?.image || "",
          slug: blog?.slug || "",
          content: blog?.content || "",
          comments: blog ? [...blog.comments, newComment] : [newComment],
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBlog(slug).then((blog: IBlog | null) => {
      // if (blog) {
      //   blog.date = moment(blog.date).toDate();
      // }
      setBlog(blog);
    });
  }, [slug]);

  return (
    <main>
      {blog ? (
        <div>
          <div className={style.page_title}>
            <h1>{blog.title}</h1>
          </div>
          <div className={style.blog_container}>
            <h2 className={style.post_subtitle}>
              {parseCommentTime(blog.date)}
            </h2>
            <p className={style.post_description}>{blog.content}</p>
            <div className={style.row}>
              <div className={style.blog_image}>
                <Image
                  src={blog.image}
                  alt="img"
                  width={250}
                  height={300}
                ></Image>
              </div>

              <div className={style.blog_container}>
                <h2>Comments</h2>
                {blog.comments.map((comment: IComment, index: number) => (
                  <Comment key={index} comment={comment} />
                ))}
                <h3>Leave a Comment!</h3>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input type="text" name="name" placeholder="name" />
                  </label>
                  <label>
                    Comment:
                    <textarea name="comment" placeholder="comment" />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Blog not found</h1>
      )}
    </main>
  );
}
