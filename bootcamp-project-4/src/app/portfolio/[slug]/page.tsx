"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Comment from "../../components/comment";
import { IProject } from "../../database/projectSchema";
import { IComment } from "../../database/blogSchema";
import style from "../../blog/blog.module.css";
import { set } from "mongoose";

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

export default function Project({ params: { slug } }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<IProject | null>(null);

  async function getProject(slug: string) {
    try {
      const res = await fetch(`/api/portfolio/${slug}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch project");
      }

      const project = await res.json();
      setProject(project);
      setIsLoading(false); // Set loading to false when blog has been fetched
      return project;
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

      const res = await fetch(`/api/portfolio/${slug}/comment`, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (inputName) inputName.value = "";
      if (inputComment) inputComment.value = "";

      if (res.status === 200) {
        setProject({
          title: project?.title || "",
          date: project?.date || new Date(),
          description: project?.description || "",
          image: project?.image || "",
          slug: project?.slug || "",
          comments: project ? [...project.comments, newComment] : [newComment],
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getProject(slug).then((project: IProject | null) => {
      setProject(project);
    });
  }, [slug]);

  return (
    <main>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {project ? (
            <div>
              <div className={style.page_title}>
                <h1>{project.title}</h1>
              </div>
              <div className={style.blog_container}>
                <h2 className={style.post_subtitle}>
                  {parseCommentTime(project.date)}
                </h2>
                <p className={style.post_description}>{project.description}</p>
                <div className={style.row}>
                  <div className={style.blog_image}>
                    <Image
                      src={project.image}
                      alt="img"
                      width={250}
                      height={300}
                    ></Image>
                  </div>

                  <div className={style.blog_container}>
                    <h2>Comments</h2>
                    {project.comments.map(
                      (comment: IComment, index: number) => (
                        <Comment key={index} comment={comment} />
                      )
                    )}
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
            <h1>Project not found</h1>
          )}
        </div>
      )}
    </main>
  );
}
