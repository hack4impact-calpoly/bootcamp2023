import React from "react";
import type { Blog } from "../blog";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <main id="main">
        <h1 className={style.pageTitle}>{props.title}</h1>
        <h2 className={style.postDate}>{props.date}</h2>
      </main>
    </div>
  );
}
