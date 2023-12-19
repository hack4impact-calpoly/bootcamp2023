import React from 'react';
import type { Blog } from "../blogData.ts";
import style from './blogPost.module.css';
import Image from "next/image";
import Link from "next/link";


export default function BlogPost(props: Blog) {
  // This way our sizez are proprotional
  const height = 400
  const width = (props.width / props.height * height)
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <>
    <div className={style.web_blog_post}>
        <div className={style.web_blog_post_header}>
            <br/>
            <Link href="/blog" className={style.blog_link}><h1 className={style.blog_title}>{props.title}</h1> </Link>
            <h3 className={style.web_blog_date}>{props.date}</h3>
        </div>
            <Image className={style.web_blog_image} src={props.image} alt={props.image_alt} height={height} width={width}></Image>
        <div className={style.web_blog_content}>
            <h2 className={style.web_blog_description}>
                {props.description}
            </h2>
            <br/>
        </div>
    </div> 
    </>

  )};