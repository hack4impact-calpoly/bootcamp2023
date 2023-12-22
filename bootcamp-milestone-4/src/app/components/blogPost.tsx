import React from "react";
import type { Blog } from "../../database/legacyData/blogData.ts";
import style from "./blogPost.module.css";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify"; // this exists so we can make slugs out of things, not really needed because I handled it on my end

export default function BlogPost(props: Blog) {
  // This way our sizez are proprotional
  const height = 400;
  const width = (props.width / props.height) * height;
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <>
      <div className={style.web_blog_post}>
        <div className={style.web_blog_post_header}>
          <br />
          <Link href="/blog" className={style.blog_link}>
            <h1 className={style.blog_title}>{props.title}</h1>{" "}
          </Link>
          <h3 className={style.web_blog_date}>{props.date}</h3>
        </div>
        <Image
          className={style.web_blog_image}
          src={props.image}
          alt={props.image_alt}
          height={height}
          width={width}
        ></Image>
        <div className={style.web_blog_content}>
          <h2 className={style.web_blog_description}>{props.description}</h2>
          <br />
        </div>
      </div>
    </>
  );
}
