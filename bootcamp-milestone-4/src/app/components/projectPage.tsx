"use client";
import React from "react";
import Link from "next/link";
import style from "./blogPage.module.css";
import { IProject } from "../../database/projectSchema";

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
      <Link href="/portfolio">Back To Project Portfolio</Link>
    </div>
  );
}
