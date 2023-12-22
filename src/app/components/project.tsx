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
        <h2 className={style.commentTitle}>Comments</h2>
        <div className={style.newComments}>
            <form className={style.new}>
              <input type="text" className={style.newName} name="name" placeholder="Name" />
              <textarea 
                className={style.newComment}
                rows={5}
                id={style.message}
                name="message"
                placeholder="Type your comment here"
                ></textarea>
              <button type="submit" className={style.button}>Submit</button>
            </form>
          </div>
      </div>
    </main>
  );
}
