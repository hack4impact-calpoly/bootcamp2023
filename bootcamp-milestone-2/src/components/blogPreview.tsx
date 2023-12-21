import React from "react";
import style from "./blogPreview.module.css";
import type { Blog } from "@/database/blogSchema";
import Link from "next/link";

export default function BlogPreview(props: Blog) {

  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.blogEntry}>
      <h2>{props.title}</h2>
      <p>Date: {props.date?.toLocaleString()}</p>
      <p>{props.desc}</p>
      <Link href={`/blogs/${props.slug}`}>Read More</Link>
    </div>
  );
}
