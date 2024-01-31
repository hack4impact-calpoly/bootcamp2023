import React from 'react';
import Image from 'next/image'
import style from './blogPreview.module.css'
import type {IBlog} from "../database/blogSchema"
import Link from "next/link";

export default function BlogPreview(props: IBlog) {
    return (
    <div className={style.post}>
    <div className={style.blog}> 
    <h1 className={style.blogTitle}> {props.title}</h1> 
    <h2 className={style.blogData}> {props.date} </h2>
        <div className={style.blogContainer}>
                <p className="blog-description"> {props.description} </p>
                <Link className={style.link} href={`/blog/${props.slug}`}>(See more)</Link>
        </div>
    </div>
    <Image className={style.image} src={props.image} width="300" height="300" alt="Image of blog post" />
    </div>
  );
}