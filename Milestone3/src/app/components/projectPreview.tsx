import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import { Project } from "../projectData";
import Link from "next/link";
export default function ProjectPreview(props: Project) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.blog}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.date.toString()}</p>
        <Image src={props.content} alt="img" width={400} height={300}></Image>
        <p>{props.description}</p>
        <Link href={"projects/" + props.slug}>Read More</Link>
      </div>
    </div>
  );
}
