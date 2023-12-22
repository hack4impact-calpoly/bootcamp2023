import React from "react";
import type { Blog } from "../blogData";
import style from "./blogPreview.module.css";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.div}>
      <h2>
        <Link href={props.slug}>{props.title}</Link>{" "}
      </h2>
      <div>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
