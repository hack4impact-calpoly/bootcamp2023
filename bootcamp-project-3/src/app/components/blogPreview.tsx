import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import type { IBlog } from "../database/blogSchema";

export default function BlogPreview(props: IBlog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.blog_container}>
      <Link href={`/blog/${props.slug}`}>
        <h2 className={style.page_title}>{props.title}</h2>
      </Link>

      <div className={style.blog_list}>
        <Image src={props.image} alt="img" width={250} height={300}></Image>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <Link href={`/blog/${props.slug}`}>
          <p>Click to Learn More!</p>
        </Link>
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