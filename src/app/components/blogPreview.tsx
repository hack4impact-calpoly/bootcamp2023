import React from "react";
// import style from './blogPreview.module.css'
import Image from "next/image";
import type { IBlog } from "@/database/blogSchema";

export default function BlogPreview(props: IBlog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    // <div className={style.bordered_container}>
    <div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        {/* <h2>{props.date}</h2> */}
      </div>
      <button>
        {/* <a className={style.button_link} href={`blog/${props.slug}`}> */}
        <a href={`blog/${props.slug}`}>Read More</a>
      </button>
    </div>
  );
}
