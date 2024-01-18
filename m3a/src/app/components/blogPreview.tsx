import React from "react";
import { IBlog } from "../database/blogSchema";
import Link from "next/link";
import style from "./blogPreview.module.css";

export default function BlogPreview({ title, slug, description } : IBlog) {
  return (
    <div className={style.blog}>
      <Link href={`/blog/${slug}`}>
        <h3 className={style.title}> {title} </h3>
      </Link>
      <p className={style.description}> {description} </p>
      <div>
      </div>
    </div>
  );
}
