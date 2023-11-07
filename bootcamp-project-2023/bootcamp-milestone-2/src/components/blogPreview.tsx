import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import blog from "../blogData";

export default function BlogPreview(props: Blog) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className={style.individualBlogPost}>
        <h3 className={style.blogPostTitle}>{props.title}</h3>
        <Image
          className={style.blogPostImage}
          src={props.image}
          alt="img of specific blog"
          width="500"
          height="500"
        />
        <p className={style.blogPostDescription}>{props.description}</p>
        <p className={style.blogPostDate}>{props.date}</p>
        <p className={style.blogPostDate}>Blogs Slug {props.slug}</p>
      </div>
    </Link>
  );
}
