import React from "react";
import style from "./blogPreview.module.css";
import { Blog } from "../../pages/blog/blogData";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPreview}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>Date: {props.posted}</p>
      <Link href={props.slug}>
        <u>Read More</u>
      </Link>
    </div>
  );
}
