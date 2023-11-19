import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";


import type { IProject } from "../database/projectSchema";

export default function BlogPreview(props: IProject) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.blog_container}>
      <h2 className={style.page_title}>{props.title}</h2>

      <div className={style.blog_list}>
        <Image src={props.image} alt="img" width={250} height={300}></Image>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

/** 
date
"10-21-2023"
description
"Becoming a Blogger"
image
"/stars.jpg"
slug
"blog2"
content
"I am becoming quite fluent in blogging"
*/
