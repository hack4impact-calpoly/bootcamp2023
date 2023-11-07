import React from "react";
import styles from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import blog from "../blogData";

export default function BlogPreview(props: Blog) {
  return (
    <Link className={styles.individualBlogPost} href={`/blog/${props.slug}`}>
      <h3 className={styles.blogPostTitle}>{props.title}</h3>
      <Image
        className={styles.blogPostImage}
        src={props.image}
        alt="img of specific blog"
        width="500"
        height="500"
      />
      <p className={styles.blogPostDescription}>{props.description}</p>
      <p className={styles.blogPostDate}>{props.date}</p>
    </Link>
  );
}
