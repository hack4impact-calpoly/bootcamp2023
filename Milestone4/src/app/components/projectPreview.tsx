import React from "react";
import Link from "next/link";
import type { IProject } from "../database/projectSchema";
import style from "./blogPreview.module.css";
export default function ProjectPreview(props: IProject) {
  return (
    <div className={style.blog}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link href={`./portfolio/${props._id}`}>
          <button className="blog-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
}
