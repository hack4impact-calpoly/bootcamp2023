import React from "react";
import style from "./projectPreview.module.css";
import type { Project } from "@/database/projectSchema";
import Image from "next/image";

export default function ProjectPreview(props: Project) {

  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.projectEntry}>
      <h2>{props.title}</h2>
      <Image
            src={props.image}
            width={400}
            height={250}
            alt={props.image}
          ></Image>
          <p>{props.desc}</p>
    </div>
  );
}
