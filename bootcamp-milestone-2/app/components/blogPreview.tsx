import React from "react";
import Link from "next/link";
import type { Blog } from "../blogData";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blog}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <Link className="Read More" href={props.slug}>
          Read More
        </Link>
      </div>
    </div>
  );
}
