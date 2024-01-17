import React from "react";
import type { IBlog } from "../database/blogSchema";
import style from "./blogPreview.module.css";
import Link from "next/link";

export default function BlogPreview({
  title,
  slug,
  date,
  description,
  content,
  comments,
  image,
}: IBlog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.div}>
      <h2>
        <Link href={`/blog/${slug}`}> {title}</Link>
      </h2>
      <div>
        <p>{JSON.stringify(date)}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
