import React from "react";
import "../globals.css";
import Image from "next/image";
import type { Blog } from "/Users/kellybecker/Desktop/Hack4Impact/bootcamp-project-2023/bootcamp-milestone-2/src/app/blogData";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div>
      <h3> {props.name} </h3>
      <div>
        <Image src={props.image} alt="img" width={400} height={300} />
        <p>{props.description}</p>
        <p>{props.posted}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
