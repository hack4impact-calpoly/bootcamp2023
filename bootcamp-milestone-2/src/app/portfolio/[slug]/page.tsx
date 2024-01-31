"use client"

import style from '../../components/blogPreview.module.css'
import React, { useEffect, useState } from "react";
import { IComment } from "../../database/blogSchema";
import type { IProject } from "../../database/projectSchema";
import Image from "next/image";
import Comment from "../../components/blogComment"
import Link from "next/link";

type Props = {
    params: {slug: string}
}

export default function Page ({params: {slug}}: Props){
    const [project, setProject] = useState<IProject | null>(null);

    async function getProject(slug: string) {
        try {
          const res = await fetch(`http://localhost:3000/api/portfolio/${slug}`, {
            cache: "no-store",
          });
    
          if (!res.ok) {
            throw new Error("Failed to fetch project");
          }
    
          const project = await res.json();
          setProject(project);
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
            time: new Date(),
          };
          console.log(newComment.time);
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

    if (project){
        return (
            <div className={style.row}>
            <div className={style.column}>
                <Link className={style.link} href="/portfolio">Back</Link>
                <p className={style.blogTitle}> <strong> {project.title}</strong> </p>
                <p className={style.description}> {project.description} </p>
                <Image src={project.image} width="350" height="170" alt="Portrait image of Elaina Lyons" />
            </div>

            <div className={style.column}>
            <h2 className={style.blogTitle}>Comments</h2>
                    {(project.comments)?.map((comment: IComment, index: number) => (
                        <Comment key={index} comment={comment} />
                      )
                    )}
            </div>


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
        console.log("error!")
        return (
          <div>
            Error
          </div>
        )
    }
  }

