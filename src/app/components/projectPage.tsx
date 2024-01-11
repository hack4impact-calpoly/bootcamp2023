"use client";
import React from "react";
import Link from "next/link";
import style from "./blogPreview.module.css";
import { IProject, IComment } from "@/database/projectSchema";
import Comment from "./comment";
import CreateComment from "@/app/components/makeComment";

export default function ProjectPage(projectpage: IProject) {
  return (
    <div className={style.projectpage}>
      <p>
        {projectpage.date.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
      <p>{projectpage.description}</p>
      <Link href="/portfolio">Back To Portfolio</Link>
      <div className={style.allcomments}>
        <h3>Comments</h3>
        {projectpage.comments.map((comment: IComment, index: number) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <CreateComment slug={projectpage.slug} content={"portfolio"} />
      <h3>SPACE</h3>
    </div>
  );
}
