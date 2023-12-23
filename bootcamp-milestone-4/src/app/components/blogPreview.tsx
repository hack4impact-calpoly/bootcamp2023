import React from "react";
import type { IBlog } from "@/database/blogSchema";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview(props: IBlog) {
  // This way our sizez are proprotional

  console.log(props);
  const width = 200;
  const height = (props.height / props.width) * width;
  // console.log('Received props:', props)
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div key={props.slug} className={style.blog_post}>
      <Image
        className={style.blog_image}
        src={props.image}
        alt={props.image_alt}
        width={width}
        height={height}
      ></Image>
      <div className={style.blog_content}>
        <Link className={style.blog_link} href={"/blog/" + props.slug}>
          {" "}
          <h1 className={style.blog_title}>{props.title}</h1>{" "}
        </Link>
        <h2 className={style.blog_description}>{props.preview}</h2>
        <h3 className={style.blog_date}>{"" + props.date}</h3>
        {/* <h3 className={style.blog_description}>{props.description}</h3> */}
      </div>
    </div>
  );
}
