import React from "react";
import type { IProject } from "../database/projectSchema";
import Image from "next/image";
import Link from "next/link";
import style from "./projects.module.css";

export default function Projects(props: IProject) {
  return (
    <main className={style.projectDetails}>
      <h2 className={style.projectTitle}>{props.title}</h2>
      <div className={style.projectImage}>
        <Link href={props.slug}>
          <Image src={props.image} alt="" height={150} width={250}></Image>
        </Link>
      </div>
      <div>
        <p className={style.projectDescription}>{props.description}</p>
        <Link href={props.slug}>
          <p className={style.projectMore}>Learn more</p>
        </Link>
      </div>
    </main>
  );
}
