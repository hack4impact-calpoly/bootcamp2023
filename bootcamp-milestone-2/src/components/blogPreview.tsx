import React from "react";
import style from "./blogPreview.module.css";
import type { Blog } from "@/app/blogData";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.blogEntry}>
      <h2>{props.title}</h2>
      <p>Date: {props.date}</p>
      <p>{props.desc}</p>
      <Link href={`/blog/${props.slug}`}>Read More</Link>
    </div>
  );
}
