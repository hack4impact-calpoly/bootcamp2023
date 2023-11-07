import React from 'react';
import type { Blog } from "@/app/blogData.js"
import style from './blogPreview.module.css'
import Link from "../../node_modules/next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
        <div className="mystyle">
            <br></br>
        <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <img className="image" alt="img" height={250} src={props.image}></img>
            <Link href={props.slug}>Read More</Link>
            <br></br>
        </div>
	  </div>
  );
}