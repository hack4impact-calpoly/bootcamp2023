import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import { IBlog } from "../../database/blogSchema";
import Link from "next/link";

export default function BlogPreview(props: IBlog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <Link href={"blogs/" + props.slug} className={style.blog_link}>
      <div className={style.blog_container}>
        <h3 className={style.blog_title}> {props.title} </h3>
        <div className={style.blog_info}>
          <Image
            src={
              props.imagePath ? props.imagePath : "/5O_1di3yc-0yQiCpsQ576w.jpg"
            }
            alt="img"
            width={500}
            height={500}
          ></Image>
          <p>{props.description}</p>
          <p>{props.date.toISOString().substring(0, 10)}</p>
        </div>
      </div>
    </Link>
  );
}
