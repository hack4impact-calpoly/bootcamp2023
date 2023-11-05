import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import { Blog } from "../blogData";
export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.blog}>
      <div>
        <h3>{props.title}</h3>
        <Image src={props.image} alt="img" width={400} height={300}></Image>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
