import React from "react";
import "../globals.css";
import Image from "next/image";
import type { Blog } from "/Users/kellybecker/Desktop/Hack4Impact/bootcamp-project-2023/bootcamp-milestone-2/src/app/blogData";

export default function BlogPreview({
  name,
  description,
  image,
  posted,
}: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div>
      <h3> {name} </h3>
      <div>
        <Image src={image} alt="img" width={400} height={300} />
        <p>{description}</p>
        <p>{posted}</p>
      </div>
    </div>
  );
}
