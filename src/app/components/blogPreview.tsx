import React from "react";
import Link from "next/link";
import style from "./blogPreview.module.css";
import { IBlog } from "@/database/blogSchema";

export default function BlogPreview(props: IBlog) {
  return (
    <div className={style.blog}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.date.toDateString()}</p>
        <p>{props.description}</p>
        <Link className="Read More" href={`blog/${props.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
