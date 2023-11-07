import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
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
      </div>
  );
}
