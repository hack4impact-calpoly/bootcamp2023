import React from "react";
import type { IBlog } from "../database/blogSchema";
import style from "./blogPreview.module.css";
import Link from "next/link";

export default function BlogPreview(props: IBlog) {
  return (
    <div className={style.blogPreview}>
      <main>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <div>
          <p className={style.blogDetails}>{props.description}</p>
          <Link href="/blog/[slug]" as={`/blog/${props.slug}`}>
            <p className={style.blogMore}>Learn more</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
