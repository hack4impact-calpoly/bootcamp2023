import React from "react";
import type { IBlog } from "../database/blogSchema";
import style from "@/app/home.module.css";
import Image from "next/image";
import Link from "next/link";

//<Image src={props.image} alt="img" width={500} height={300}></Image>

export default function BlogPreview(props: IBlog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.about}>
      <div className={style.abouttext}>
      <Link href={`/blogs/${props.slug}`}>
        <h3>{props.title} </h3>
        </Link>
        <div>
          <p>{props.description}</p>
          <Image
            src={"/" + props.image}
            alt="img"
            width={600}
            height={400}
          ></Image>
          <p>Posted on {props.date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
  }
