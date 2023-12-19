import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import { Blog } from "@/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3> {props.name} </h3>
      <h3> {props.slug} </h3>
      <div>
        <Image src="{props.image}" alt="img" width={500} height={500}></Image> 
        <p>{props.description}</p>
        <p>{props.posted}</p>
      </div>
    </div>
  );
}
