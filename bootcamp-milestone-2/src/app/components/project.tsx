import React from "react";
import type { IProject } from "../database/projectSchema";
import Image from "next/image";
import Link from "next/link";
import style from "../portfolio/projects.module.css";

export default function Projects(props: IProject) {
  return (
    <div>
      <h1 className={style.pageTitle}>Blog</h1>
      <main>
        <h2 className={style.pageTitle}>{props.title}</h2>
        <div className={style.projectImage}>
          <Link href={props.slug}>
            <Image src={props.image} alt="" height={150} width={250}></Image>
          </Link>
        </div>
        <div className={style.projectDetails}>
          <p className={style.projectDescription}>{props.description}</p>
          <p className={style.projectMore}>Learn more</p>
        </div>
      </main>
    </div>
  );
}
