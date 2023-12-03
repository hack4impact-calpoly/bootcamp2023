import React, { PropsWithRef } from "react";
import style from "./blogPreview.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  description: string;
  slug: string;
  pic: string;
};

export default function BlogPreview(props: Props) {
  if (props != null) {
    return (
      <div className={style.blogPreview}>
        <h3 className={style.blogPreviewTitle}>
          <Link href="/blog/[slug]" as={`/blog/${props.slug}`}>
            {props.title}
          </Link>{" "}
        </h3>
        <div className={style.blogPreviewInfo}>
          <Image
            className={style.blogPreviewPic}
            src={props.pic}
            alt="img"
            width="500"
            height="500"
          ></Image>
          <p className={style.blogPreviewDescription}>{props.description}</p>
          <p className={style.blogPreviewDate}>Posted on: {props.date}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Blog not found :/</p>
      </div>
    );
  }
}
