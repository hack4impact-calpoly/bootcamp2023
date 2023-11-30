import React from "react";
import type { Blog } from "../blog";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPreview}>
      <main>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p className={style.blogDetails}>{props.description}</p>
        <p>Learn more</p>
      </main>
    </div>
  );
}
