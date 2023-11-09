import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import { Blog } from "../blogData";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <Link href={"blogs/" + props.slug} className={style.blog_link}>
      <div className={style.blog_container}>
        <h3 className={style.blog_title}> {props.title} </h3>
        <div className={style.blog_info}>
          <Image src={props.image} alt="img" width={500} height={500}></Image>
          <p>{props.description}</p>
          <p>{props.date}.</p>
        </div>
      </div>
    </Link>
  );
}
